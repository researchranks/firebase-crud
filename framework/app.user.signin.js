define(function(){


  App.prototype.user.signin = function(user_email,user_password){



      firebase
        .auth()
        .signInWithEmailAndPassword(user_email,user_password)
        .then(
            function(success){

             debug_success = success;

             //console.log(success.email);
             //console.log(firebase.auth().currentUser);
              //this.user.email = success.email;
              // app.update.user.status(success.email);
              // app.update.user.email();

              // app.user.email = success.email;
              if(success.email !== null || 'undefined'){
                console.log(app);
                  App.prototype.user.status = 'logged in';
                  //this.constructor.prototype.user.status = 'logged in';
              }

              //this.update.user.email();
              App.prototype.user.data();

    document.getElementById('app-error-message').textContent = 'none';
    document.getElementById('app-current-status').textContent = App.prototype.user.status;



              App.prototype.user.email = success.email;

              document.getElementById('app-current-user').textContent = App.prototype.user.email;


              // console.log( firebase.auth().currentUser );

              //  console.log(
              //    success.code,
              //    success.message
              //  );

                },
            function(error){
                    debug_error = error;

                    this.constructor.prototype.user.status = error.message;

                    document.getElementById('app-error-message').textContent = error.message;


                     return console.error(
                       error.message,
                       error.code
                     );



            }
       );

    };

  return App.prototype.user.signin;

});
