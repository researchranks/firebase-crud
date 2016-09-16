define(function(){
    App.prototype.controller.signup = function(){

        var back_to_signin = App.prototype.util.element.get('app-signin');
        var signup = App.prototype.util.element.get('app-signup');

    signup.addEventListener('submit', function(event){
            event.preventDefault();
            console.log( Date.now() );
            var signup_email = signup[0].value;
            var signup_password = signup[1].value;

            firebase.auth().createUserWithEmailAndPassword(signup_email,signup_password).then(function(success){
                console.log(success);
            });

            signup[0].value = '';
            signup[1].value = '';

            back_to_signin.click();

        }, false);





        back_to_signin.addEventListener('click', function(event){
                event.preventDefault();

                console.log(Date.now());
                require([
                    'framework/app.view.signin',
                ],function(html_data){
                    App.prototype.user.view = '';
                    App.prototype.user.view = html_data;
                    App.prototype.util.element.get('body').innerHTML = html_data;
                    App.prototype.controller.signin();
                });




        });
    };

    return {
        app_controller_signup : App.prototype.controller.signup
    };


});
