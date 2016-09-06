//globals for debugging
//
var debug_error;
var debug_succes;
var debug_current_user;
var debug_previous_user;
var debug_user_data;
var debug_data;


//constructor function
var App = function(){
  if (!(this instanceof App)) {
  // the constructor was called without "new".
  return new App();
  }

   var self = this;
   var display_type;

   this.init = function(){

     self.user.signout();
     document.getElementById('app-current-status').textContent = self.user.status;
     document.getElementById('app-current-user').textContent = 'none';
     document.getElementById('app-last-user').textContent = 'none';
     document.getElementById('app-error-message').textContent = 'none';
     document.getElementById('app-user-data').textContent = 'none';
      return self.user.signout();

   };

   this.import = function(){

     

   },



   this.element = {

     create : function(element_type,element_id){
       var element = document.createElement(element_type);
       element.setAttribute('id',element_id);
       document.body.appendChild(element);
       self.element.hide(element_id);
     },

     hide : function(element_id){
       var element = document.getElementById(element_id);
       display_type = element.style.display;
       element.style.display = 'none';

     },

    show : function(element_id){
       var element = document.getElementById(element_id);
       element.style.display = display_type;
     }

   };




   this.database = {

    root : function(){

       firebase.database().ref().on('value',function(data){

          console.log( data.val() );
          return data.val();

        },function(error){
          console.log( error );
          document.getElementById('app-error-message').textContent = error;
          return error;
        });
    },







   read : function(){

         var data;

         firebase.database()
         .ref()
         .once('value')
         .then(
           function(snapshot){
              debug_user_data = snapshot.val();
              debug_data = snapshot.val();

           }
         );

   },


    create : function(parent_node,child_node,node_data){

      if(parent_node && child_node && node_data !== null || 'undefined'){
        firebase.database()
          .ref( parent_node )
          .child( child_node )
          .set( node_data )
          .then(
              function(success){
                      debug_success = success;
                      console.log(
                        //success.code,
                        success.message
                      );
                  },
              function(error){
                      debug_error = error;
                      document.getElementById('app-error-message').textContent = error.message;

                      return console.error(
                         error.message,
                         error.code
                       );
              }
          );
      }



    }


  };


   this.user = {

     status : function(){

          //var current_user = firebase.auth().currentUser;

                  if( firebase.auth().currentUser === null ){
                         return 'signed out';
                     }else{
                         return 'logged in';
                     }


             //return firebase.auth().currentUser.email;
    }(),

    data : function(){

          var user_data_key = '';
          var user_data_value = '';
          var user_data = '';
          var key;
          var value;

          firebase.database()
          .ref()
          .once('value')
          .then(
            function(snapshot){
               debug_user_data = snapshot.val();
               debug_data = snapshot.val();

               //console.log( snapshot.val() );



              for ( var property in snapshot.val() ){


                key = property;
                value = snapshot.val()[property];

                console.log( key );
                console.log( value );

                // for( var data_key in snapshot.val()[property] ){
                //     console.log( data_key );
                //     console.log( snapshot.val()[property][data_key] );
                //   }

              }

              //   user_data +=
              //    '<dt>'+ key + '</dt>'+
              //    '<dd>'+
              //      value+
              //    '</dd>'+
              //    '</dt>';
              // }


              //  for(var i in snapshot.val() ){
               //
              //   var key = i;
              //   var data = snapshot.val();
              //   var value = i;
               //
               //
              //  }


                document.getElementById('app-user-data').innerHTML = user_data;

            }
          );
    },


     email : function(){
        if( firebase.auth().currentUser !== null){
            return firebase.auth().currentUser.email;
        }else{
          return '';
        }

    }(),

     signin : function(user_email,user_password){

          firebase
            .auth()
            .signInWithEmailAndPassword(user_email,user_password)
            .then(
                function(success){
                        debug_success = success;

        self.update.user.status();
        self.update.user.email();
        self.user.data();

        document.getElementById('app-error-message').textContent = 'none';
        document.getElementById('app-current-status').textContent = self.user.status;
        console.log( self.user.status );
        document.getElementById('app-current-user').textContent = self.user.email;




                        console.log(
                          success.code,
                          success.message
                        );
                    },
                function(error){
                        debug_error = error;
                        document.getElementById('app-error-message').textContent = error.message;


                         return console.error(
                           error.message,
                           error.code
                         );



                }
            );
      },

     signout : function(){

       var current_user = ''; //firebase.auth().currentUser;

       if( current_user === null ){
         current_user = 'n/a';
         document.getElementById('app-error-message').textContent = 'none';
       }else{
          current_user = firebase.auth().currentUser;
        }

        //var previous_user = String(firebase.auth().currentUser);
        var previous_user = firebase.auth().currentUser;

            firebase.auth().signOut().then(
                function(success){

                      self.update.user.email();

                      if (typeof success != 'undefined' || current_user === null){
                        return console.log('Signed Out Of Account');
                      }
                        debug_previous_user = previous_user;
                        console.log( previous_user );

                        document.getElementById('app-last-user').textContent = previous_user.email;


                        document.getElementById('app-current-user').textContent = 'none';

                        document.getElementById('app-user-data').textContent = 'none';
                        document.getElementById('app-user-data').innerHTML = '';




                          document.getElementById('app-current-status').textContent = 'signed out of ' + previous_user.email;
                             return console.log(
                               'Signed Out Of '+
                               previous_user.email +
                               ' ' + success);
                         },
                function(error){

                            console.log( '----------' );
                            console.log( error.code );
                            console.log( '----------' );
                            console.log( error.message );

                             return console.error('Sign Out Error', error);

                     }
              );
      }

  };


   this.update = {
     user : {
        status : function(){

              if( firebase.auth().currentUser === null ){

                     self.user.status = 'signed out';
                     return 'signed out';

                 }else{
                   self.user.status = 'logged in';
                   return 'logged in';
               }

        },

        email : function(){
          if(firebase.auth().currentUser !== null){
            self.user.email = firebase.auth().currentUser.email;
            return self.user.email;
          }else{
            return '';
          }

        },


      }
   };


};
