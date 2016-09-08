define(function(){

      require('framework/app.update.user');

App.prototype.update.user.status = function(data){

      app.user.email = data;
      
      // try{
      //           try{app.config();}catch(error){}
      //
      //           if( firebase.auth().currentUser === null || 'undefined' ){
      //                app.user.status =  'signed out';
      //           }else{
      //                app.user.status =  'logged in';
      //           }
      //
      // }
      // catch(error) {
      //
      //           console.log(error);
      // }


};

      return App.prototype.update.user.status;

});
