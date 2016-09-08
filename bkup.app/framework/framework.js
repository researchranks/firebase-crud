define( function(){

    function status(){
       return firebase.auth().currentUser;
    }

    return {
      status : status
    };

});
