App.prototype.database = {};



App.prototype.database.root = function(){

   firebase.database().ref().on('value',function(data){

      console.log( data.val() );
      return data.val();

    },function(error){
      console.log( error );
      document.getElementById('app-error-message').textContent = error;
      return error;
    });
};







App.prototype.database.read = function(){

     var data;

     firebase.database()
     .ref()
     .once('value')
     .then(
       function(snapshot){
          debug_user_data = snapshot.val();
          debug_data = snapshot.val();
          console.log (debug_data );
          return snapshot.val();

       }
     );

};
