var App = function(){
  if (!(this instanceof App) ){
     return new App();
  }

};

var app = new App();


requirejs.config({
    baseUrl: 'lib',
    paths : {
            framework : '../framework',
    }
});

require([
    'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
    // 'framework/app',
    'framework/app.status',
    'framework/app.config',
    'framework/app.element',

    'framework/app.user',
    'framework/app.user.email',
    'framework/app.user.data',
    'framework/app.user.status',
    'framework/app.user.signin',
    'framework/app.user.signout',


    'framework/app.view.login',


],function(){
        app.config();
        app.user.signout();
});
