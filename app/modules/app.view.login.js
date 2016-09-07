//require firebase.framework.modeules


require([
    // 'modules/app.framework',
    // 'modules/app.config',
    // // 'modules/app.database.create',
    // // 'modules/app.database',
    // // 'modules/app.element.create',
    // // 'modules/app.element',
    // // 'modules/app.example',
    // // 'modules/app.import',
    // // 'modules/app.parent.child',
    // // 'modules/app.parent',
    //
    //
    // 'modules/app.user',
    // 'modules/app.user.signin',
    // 'modules/app.user.signout',
    //
    // 'modules/app.user.status',
    // 'modules/app.user.data',
    // 'modules/app.user.email',
    //
    //
    // 'modules/app.update',
    // 'modules/app.update.user',
    // 'modules/app.update.user.status',
    // 'modules/app.update.user.email',
    //
    //
    //
    // 'modules/app.init',
    ],function(){
        // app.init();
});


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
            //document.getElementById('app-current-status').textContent = firebase.auth().currentUser || 'signed out';
}, false);
