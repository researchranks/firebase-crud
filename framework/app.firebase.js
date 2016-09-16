define(
  function(){
        App.prototype.firebase = function(){
          try{
              return firebase.auth();
          }
          catch(error){
          	var regex = new RegExp('No Firebase App');
          	if( regex.test(error.message) ){
          	}

            return error.message;
          }
        }();

        return {
            app_firebase : App.prototype.firebase
        };
    }
);
