define( function(){

  require('framework/app.user');

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

            app.user.email = success.email;
            if(success.email !== null || 'undefined'){
                app.user.status = 'logged in';
            }

            //this.update.user.email();
            //this.user.data();

            document.getElementById('app-error-message').textContent = 'none';
            document.getElementById('app-current-status').textContent = app.user.status;
            // console.log( this.user.status );
            document.getElementById('app-current-user').textContent = success.email;

            // console.log( app.user.email );


            // console.log( firebase.auth().currentUser );

            //  console.log(
            //    success.code,
            //    success.message
            //  );

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

  };

  return App.prototype.user.signin;

});
