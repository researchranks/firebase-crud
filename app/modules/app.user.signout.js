App.prototype.user.signout = function(){

  var current_user = '';

  if( current_user === null ){
    current_user = 'n/a';

    this.element('app-error-message').textContent = 'none';


  }else{
     current_user = firebase.auth().currentUser;
   }

   //var previous_user = String(firebase.auth().currentUser);
   var previous_user = firebase.auth().currentUser;

       firebase.auth().signOut().then(
           function(success){

                 //this.update.user.email();

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
};
