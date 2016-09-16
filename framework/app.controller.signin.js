define(function(){
    App.prototype.controller.signin = function(){

        var login = App.prototype.util.element.get('app-login');
        var signout =App.prototype.util.element.get('app-signout');
        var signup = App.prototype.util.element.get('app-signup');

     signup.addEventListener('click', function(event){
                event.preventDefault();

                require([
                    'framework/app.view.signup',
                ],function(html_data){
                    App.prototype.user.view = '';
                    App.prototype.user.view = html_data;
                    App.prototype.util.element.get('body').innerHTML = html_data;
                    App.prototype.controller.signup();
                });
            }, false);


     login.addEventListener('submit', function(event){
            event.preventDefault();
            var login_email = login[0].value;
            var login_password = login[1].value;
            App.prototype.controller.user.signin(login_email,login_password);
            login[0].value = '';
            login[1].value = '';
        }, false);


        signout.addEventListener('submit', function(event){
                event.preventDefault();
                App.prototype.controller.signout();
                login.reset();
                App.prototype.util.element.get('app-current-status')
                .textContent = firebase.auth().currentUser || 'signed out';
        }, false);
    };

    return {
        app_contorller_signin : App.prototype.controller.signin
    };

});
