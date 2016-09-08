var App = function(){
  var self = this;
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
    'framework/app.config',
    'framework/app.time',
    'framework/app.scope',
    'framework/app.user',
    'framework/app.user.status'

],function(){
        app.config();
});
