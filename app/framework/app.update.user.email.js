define(function(){

  require('framework/app.update');

  App.prototype.update.user.email = function(){

    try{
              try{app.config();}catch(error){}


    if(firebase.auth().currentUser !== null){
      app.user.email = firebase.auth().currentUser.email;
      console.log( app.user.email );
      return app.user.email;
    }else{
      return '';
    }

    }catch(error){}


  };

  return App.prototype.update.user.email;

});
