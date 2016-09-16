define(function(){
  App.prototype.controller.user.signin = function(user_email,user_password){

      firebase
        .auth()
        .signInWithEmailAndPassword(user_email,user_password)
        .then(
            function(success){

              if(success.email !== null || 'undefined'){
                console.log(app);
                  App.prototype.user.status = 'logged in';
              }

              require([
                  'framework/app.controller.user.logged_in',
              ],function(html_data){
                console.log('controller user signin');
                    App.prototype.controller.user.logged_in(success);
              });



        },
            function(error){
                    App.prototype.user.status = error.message;
                    App.prototype.util.element.get('app-error-message').textContent = error.message;
                    return console.error( error.code );
            }
       );

    };

  return {
      app_controller_user_signin : App.prototype.controller.user.signin
    };
});
