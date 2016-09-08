define(function(){




App.prototype.user.email = function(){

      try{
      if( firebase.auth().currentUser !== null ){
                  return firebase.auth().currentUser.email;
      }

      }catch(e){}

      // try{
      //           try{app.config();}catch(error){console.log(error);}
      //
      //
      //       if( firebase.auth().currentUser !== null){
      //           return firebase.auth().currentUser.email;
      //       }else{
      //         return 'signed out';
      //       }
      //
      // }
      // catch(error){}

}();

return App.prototype.user.email;


});
