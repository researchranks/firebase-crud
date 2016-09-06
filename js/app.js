var ammount = 1;
var firebase_root = firebase.database().ref();

var app = new App();
app.init();


function timestamp(){
    return Date.now();
}

var login = document.getElementById('app-login');

    login.addEventListener('submit', function(event){
        event.preventDefault();
        console.log( Date.now() );
        var login_email = login[0].value;
        var login_password = login[1].value;
        app.user.signin(login_email,login_password);

        login[0].value = '';
        login[1].value = '';

    }, false);

 var signout = document.getElementById('app-signout');

        signout.addEventListener('submit', function(event){
            event.preventDefault();
            console.log( Date.now() );
                app.user.signout();
                login.reset();
                //document.getElementById('app-current-status').textContent = firebase.auth().currentUser || 'signed out';
        }, false);
