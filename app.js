var App = function(){
    if (!(this instanceof App)) {
    // the constructor was called without "new".
    return new App();

  }
};

var app = new App();

requirejs.config({

    baseUrl: 'lib',
    paths : {
            app : '../app',
            modules : '../app/modules',
            framework : '../app/framework',
            model : '../app/model',
            controller : '../app/controller',
            view : '../app/view',
    }
});


// require(['framework/app'], function(App){
//     app = new App();
//     console.log(app);
// });

require([
    'https://www.gstatic.com/firebasejs/3.3.0/firebase.js'
  ],
    function(){
      require([
          'framework/app.init',
          'framework/app.config',

          'framework/app.update',
          'framework/app.update.user',
          'framework/app.update.user.status',
          'framework/app.update.user.email',

          'framework/app.user',
          'framework/app.user.email',
          'framework/app.user.status',
          'framework/app.user.signin',
          'framework/app.user.signout',
           ],
          function(){
              // app.init();
      });
});










// Module Pattern
// var get_data = (function(){
//
//     return {
//             add : function(a,b){
//                 return a + b;
//             }
//     };
//
// })();


// Revealing Module Pattern
//
// var app = (function(){
//
//     // if (!(this instanceof App)) {
//     //     // the constructor was called without "new".
//     //     return new App();
//     // }
//
//     function add(a,b){
//         return a + b;
//     }
//
//     function user(){
//
//     }
//
//     return {
//         add : add
//     };
//
//
// })();









// require([
//         'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
//
//         ],
//         function(){
//             // console.log(firebase);
//
//             // require([
//             //         'modules/compile',
//             //     ],function(){
//             //         app.config();
//             //     });
//         }
// );


// require([
//         'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
//
//         ],
//         function(){
//             console.log(firebase);
//
//             require([
//                     'modules/app.framework',
//                     'modules/app.config',
//                     ],
//                     function(){
//                         app.config();
//                         require([
//                                 'modules/app.update',
//                                 'modules/app.update.user',
//                                 'modules/app.user',
//
//
//                                 'modules/app.update',
//                                 'modules/app.update.user',
//                                 'modules/app.user',
//
//                                 'modules/app.user.signin',
//                                 'modules/app.user.signout',
//
//                                 'modules/app.user.status',
//                                 'modules/app.user.data',
//                                 'modules/app.user.email',
//
//
//
//                                 'modules/app.update.user.status',
//                                 'modules/app.update.user.email',
//                                 'modules/app.view.login',
//
//                                 ],
//                                 function(){
//
//                                     require([
//                                     'modules/app.init',
//                                 ],function(){
//
//                                     console.log(app);
//                                     app.init();
//
//                                 });
//
//
//                                 }
//                         );
//
//                     }
//             );
//         }
// );





//                 'modules/app.element',
//                 'modules/app.element.create',
//                 // 'modules/app.example',
//                 // 'modules/app.import',
//                 // 'modules/app.parent.child',
//                 // 'modules/app.parent',
//
//                 'modules/app.update',
//                 'modules/app.update.user',
//                 'modules/app.user',
//
//                 'modules/app.user.signin',
//                 'modules/app.user.signout',
//
//                 'modules/app.user.status',
//                 'modules/app.user.data',
//                 'modules/app.user.email',



//
// require([
//
//     'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
//     ],function(){
//
//         require([
//             'modules/app.framework',
//             'modules/app.config',
//             'modules/app.init',
//         ],function(){
//             // require([
//             //     'app/main',
//             // ],function(){
//             //
//             //
//             // });
//
//             console.log( 'loaded' );
//             app.config();
//
//             require([
//                 // 'app/firebase.config',
//
//                 'modules/app.database',
//                 'modules/app.database.create',
//
//                 'modules/app.element',
//                 'modules/app.element.create',
//                 // 'modules/app.example',
//                 // 'modules/app.import',
//                 // 'modules/app.parent.child',
//                 // 'modules/app.parent',
//
//                 'modules/app.update',
//                 'modules/app.update.user',
//                 'modules/app.user',
//
//                 'modules/app.user.signin',
//                 'modules/app.user.signout',
//
//                 'modules/app.user.status',
//                 'modules/app.user.data',
//                 'modules/app.user.email',
//
//
//                 'modules/app.update.user.status',
//
//                 'modules/app.update.user.email',
//
//                 'modules/app.view.login',
//
//
//             ],function(){
//                 app.init();
//             });
//
//         });
//
// });
