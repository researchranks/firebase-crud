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
    'framework/app.status',
    'framework/app.util',
    'framework/app.util.template',
    'framework/app.config',
    'framework/app.element',
    'framework/app.controller',
    'framework/app.controller.signin',
    'framework/app.controller.signup',

    'framework/app.user',
    'framework/app.user.view',
    'framework/app.user.email',
    'framework/app.user.data',
    'framework/app.user.status',
    'framework/app.user.signin',
    'framework/app.user.signout',

    // 'framework/app.view.signup',
    // 'framework/app.view.signin',

    //
    //
    // 'framework/app.view.signin',
    // 'framework/app.controller.signin',
    //


],function(){

        app.config();

        require([
            'framework/app.view.signin',
        ],function(html_data){
            // require(['framework/app.controller.signin']);
            App.prototype.user.view = html_data;
            App.prototype.element.get('body').innerHTML = html_data;
            App.prototype.controller.signin();
        });





        // app.user.signout();
});
