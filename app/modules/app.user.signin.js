App.prototype.user.signin = function(user_email,user_password){

       firebase
         .auth()
         .signInWithEmailAndPassword(user_email,user_password)
         .then(
             function(success){
                     debug_success = success;

              //  this.update.user.status();
              //  this.update.user.email();
              //  this.user.data();

               document.getElementById('app-error-message').textContent = 'none';
               document.getElementById('app-current-status').textContent = this.user.status;
               console.log( this.user.status );
               document.getElementById('app-current-user').textContent = this.user.email;

                console.log(
                  success.code,
                  success.message
                );

                 },
             function(error){
                     debug_error = error;

                     // document.getElementById('app-error-message').textContent = error.message;
                     //

                      return console.error(
                        error.message,
                        error.code
                      );



             }
        );
};
