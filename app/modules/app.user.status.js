App.prototype.user.status = function(){

          var current_user = firebase.auth().currentUser;

                  if( firebase.auth().currentUser === null || 'undefined' ){
                         return 'signed out';
                     }else{
                         return 'logged in';
                     }

             //return firebase.auth().currentUser.email;
}();
