define(function(){
    App.prototype.controller.signin = function(){

        var login = App.prototype.element.get('app-login');
        var signout =App.prototype.element.get('app-signout');
        var signup = App.prototype.element.get('app-signup');

       signup.addEventListener('click', function(event){
                event.preventDefault();

                require([
                    'framework/app.view.signup',
                ],function(html_data){
                    App.prototype.user.view = '';
                    App.prototype.user.view = html_data;
                    App.prototype.element.get('body').innerHTML = html_data;
                    App.prototype.controller.signup();
                    // require(['framework/app.controller.signup']);
                });

                // require([
                //         'framework/app.view.signup.js',
                //         'framework/app.controller.signup',
                //     ]);


            }, false);


    login.addEventListener('submit', function(event){
            event.preventDefault();
            console.log( Date.now() );
            var login_email = login[0].value;
            var login_password = login[1].value;
            app.user.signin(login_email,login_password);

            login[0].value = '';
            login[1].value = '';

        }, false);


        signout.addEventListener('submit', function(event){
                event.preventDefault();
                console.log( Date.now() );
                    App.prototype.user.signout();
                    login.reset();
            App.prototype.element.get('app-current-status').textContent = firebase.auth().currentUser || 'signed out';
        }, false);

        console.log('app_controller_signup');

    };

    return {
        app_contorller_signin : App.prototype.controller.signin
    };

});
