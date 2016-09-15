var App = function(){
  if (!(this instanceof App) ){
     return new App();
  }

};

var app = new App();

requirejs.config({

    text: {
        useXhr: function (url, protocol, hostname, port) {
          // allow cross-domain requests
          // remote server allows CORS
          return true;
        }
    },

    baseUrl: 'lib',
    // urlArgs: "v=" +  (new Date()).getTime(),
    paths : {
            framework : '../framework',
            template : '..',
    }
});

require([
    'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
    // 'framework/app',

    'framework/app.util',
    'framework/app.util.timestamp',
    'framework/app.util.status',
    'framework/app.util.status.firebase',
    'framework/app.util.status.online',

    'framework/app.util.template',
    'framework/app.util.request',
    'framework/app.util.element',

    'framework/app.util.online',
    'framework/app.config',

    'framework/app.controller',
    'framework/app.controller.signin',
    'framework/app.controller.signup',
    'framework/app.controller.user',
    'framework/app.controller.user.signin',



    'framework/app.user',
    'framework/app.user.view',
    'framework/app.user.email',
    // 'framework/app.user.data',
    'framework/app.user.status',
    // 'framework/app.user.signin',
    'framework/app.user.signout',

],function(){

        app.config();

        require([
            'framework/app.view.signin',
        ],function(html_data){
            App.prototype.user.view = html_data;
            App.prototype.util.element.get('body').innerHTML = html_data;
            App.prototype.controller.signin();
        });





        // app.user.signout();
});
