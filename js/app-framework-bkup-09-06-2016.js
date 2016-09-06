//globals for debugging
//
var debug_error;
var debug_succes;
var debug_current_user;
var debug_previous_user;
var debug_user_data;



//constructor function
var App = function(){
  if (!(this instanceof App)) {
  // the constructor was called without "new".
  return new App();
  }
   var self = this;

   this.init = function(){

     self.user.signout();
     document.getElementById('app-current-status').textContent = self.user.status;
     document.getElementById('app-current-user').textContent = 'none';
     document.getElementById('app-last-user').textContent = 'none';
     document.getElementById('app-error-message').textContent = 'none';
     document.getElementById('app-user-data').textContent = 'none';
      return self.user.signout();

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

          firebase.database()
          .ref()
          .once('value')
          .then(
            function(snapshot){
               debug_user_data = snapshot.val();
                console.log( snapshot.val() );

               for(var i in snapshot.val().users.uid_1 ){

                var key = i;
                var data = snapshot.val().users.uid_1;
                var value = i;

                 user_data +=
                  '<dt>'+ key + '</dt>'+
                  '<dd>'+
                    data[value]+
                  '</dd>'+
                  '</dt>';

                 //user_data_value += '<li>'+  data[value]  +'</li>';
                    // for(var i = 0;  i < snapshot.val().book.uid_1.length; ++i){
                    //     user_data_value += '<li>'+ key[i] + '</li>';
                    // }

               }


                document.getElementById('app-user-data').innerHTML = user_data;

            }
          );


          // return firebase.database().ref().once(
          //   'value',function(snapshot){
          //       console.log(snapshot.val());
          //       user_data = data.val();
          //       return data.val();
          // },function(error){
          //   console.log(error);
          //   return error;
          // }).then(function(){
          //   console.log( user_data );
          //   document.getElementById('app-user-data').textContent = user_data;
          //   return user_data;
          // });
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




// };

// App.prototype.user.status = (function(){
//   return Date.now();
// });
