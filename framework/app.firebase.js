define(
  function(){
        App.prototype.firebase = function(){


          try{
              return firebase.auth();
          }
          catch(error){
          	var regex = new RegExp('No Firebase App');
          	if( regex.test(error.message) ){
          		//return 'No Firebase App';
          		//this.config();
          	}

            return error.message;

          }

        }();

      return App.prototype.firebase;
    }
);
