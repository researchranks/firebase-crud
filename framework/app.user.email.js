define(function(){
      App.prototype.user.email = function(){
      try{
            if( firebase.auth().currentUser !== null ){
                  return firebase.auth().currentUser.email;
         }
      }catch(e){}
            return false;
      }();

      return App.prototype.user.email;


});
