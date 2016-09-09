define(function(){
        var login = document.getElementById('app-login');
        var signout = document.getElementById('app-signout');

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
                            app.user.signout();
                            login.reset();
            App.prototype.element.get('app-current-status').textContent = firebase.auth().currentUser || 'signed out';
                }, false);


});
