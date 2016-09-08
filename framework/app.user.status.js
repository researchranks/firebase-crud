define(function(){
          App.prototype.user.status = (function(){

              return 'none';

   })();

          return App.prototype.user.status;
});


// require('framework/app.config');
// require('framework/app.user');
// App.prototype.user.status = 'none';

// function(){

//
//           try{
//                     try{app.config();}catch(error){}
//
//                     if( firebase.auth().currentUser === null || 'undefined' ){
//                          return 'signed out';
//                     }else{
//                          return 'logged in';
//                     }
//
//           }
//           catch(error) {
//
//                     console.log(error);
//                     return 'signed out';
//           }
//
//
//           //    return firebase.auth().currentUser.email;
// })();
//           return App.prototype.user.status;

  // return true;
// }();

// return App.prototype.user.status;
