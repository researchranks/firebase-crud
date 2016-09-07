App.prototype.update.user.status = function(){

      if( firebase.auth().currentUser === null ){

             this.user.status = 'signed out';
             return 'signed out';

         }else{
           this.user.status = 'logged in';
           return 'logged in';
       }

};
