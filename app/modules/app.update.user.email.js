App.prototype.update.user.email = function(){
  if(firebase.auth().currentUser !== null){
    self.user.email = firebase.auth().currentUser.email;
    return self.user.email;
  }else{
    return '';
  }

};
