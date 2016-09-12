define(function(){
    App.prototype.controller.signup = function(){

        var back_to_signin = App.prototype.element.get('app-signin');
        var signup = App.prototype.element.get('app-signup');

    signup.addEventListener('submit', function(event){
            event.preventDefault();
            console.log( Date.now() );
            var signup_email = signup[0].value;
            var signup_password = signup[1].value;

            firebase.auth().createUserWithEmailAndPassword(signup_email,signup_password).then(function(success){
                console.log(success);
            });
            //App.prototype.user.signin(signup_email,signup_password);

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
                    App.prototype.element.get('body').innerHTML = html_data;
                    App.prototype.controller.signin();
                    // require(['framework/app.controller.signup']);
                });




        });

        console.log('app_controller_signup');

    };

    return {

        app_controller_signup : App.prototype.controller.signup
    };


});
