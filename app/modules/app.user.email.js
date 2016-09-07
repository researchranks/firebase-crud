App.prototype.user.email = function(){

      if( firebase.auth().currentUser !== null){
          return firebase.auth().currentUser.email;
      }else{
        return '';
      }

}();
