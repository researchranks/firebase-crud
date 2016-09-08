define(function(){
          require('framework/app.config');
          require('framework/app.user');


App.prototype.user.status = ( function(){

          try{
                    try{app.config();}catch(error){}

                    if( firebase.auth().currentUser === null || 'undefined' ){
                         return 'signed out';
                    }else{
                         return 'logged in';
                    }

          }
          catch(error) {

                    console.log(error);
                    return 'signed out';
          }


          //    return firebase.auth().currentUser.email;
})();
          return App.prototype.user.status;


});
