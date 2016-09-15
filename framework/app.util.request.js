define(function(){
    App.prototype.util.request = function(url,parameter,callback){

        try{
                fetch(url,{
                    
                }).then(

                    function(response){

                        if(response.status >= 0){
                            return Promise.resolve(response);
                        }else{
                            return Promise.reject(new Error(response.statusText));
                        }

                }).then(function(data) {

                  if(parameter !== null || ''){
                        console.log( data[parameter] );
                        return  data[parameter];
                  }
                }).then(function(data){
                  return callback(data);
                }).catch(function(error) {
                    console.log(error);
                    return callback(error);
                });

        }catch(error){
            console.log(error);
        }

    };

    return{
        app_util_request : App.prototype.util.request
    };

});
