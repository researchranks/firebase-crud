define(function(){
    App.prototype.user.data = function(){

     var user_data = '';
     var user_uid = firebase.auth().currentUser.uid;

     function process(key,value) {
          if(typeof(value) == 'object'){
               console.log( key + ' : ' + 'object');
          }else{
               console.log( key + ' : ' + value);
          }
     }
     function traverse(o,func) {
         for (var i in o) {
             func.apply(this,[i,o[i]]);
             if (o[i] !== null && typeof(o[i])=="object") {
                 //going on step down in the object tree!!
                 traverse(o[i],func);
             }
         }
     }

        var query = firebase.database()
        .ref('users/'+user_uid).orderByKey();

        query.once('value')
        .then(
          function(snapshot){

              data =  snapshot.exportVal();

              for(var value in data ){
                  user_data +=
                  '<dt>'+
                        value+
                      '<dd>'+
                      data[ value ]+
                      '</dd>'+
                  '</dt>';

             }



            App.prototype.element.get('app-user-data').innerHTML = user_data;
        //
       });
    };

});
