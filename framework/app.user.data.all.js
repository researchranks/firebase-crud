define(function(){
    App.prototype.user.data = function(){

     var user_data = '';

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
        .ref('users').orderByKey();

        query.once('value')
        .then(
          function(snapshot){
            var data = snapshot.val();
            snapshot.forEach(function(users){
                user_id = users.key;
                profile_keys = Object.keys( users.exportVal() );

                 user_data +=
                 '<mark>' +
                    user_id +
                 '</mark>';

                 for(var i in profile_keys ){

                      var profile_key = profile_keys[i];
                      var profile_data = profile_key;

                    user_data +=
                    '<dl>' +
                    '<dt>' +
                         profile_key +
                    '</dt>' +
                         '<dd>' +
                              data [user_id] [ profile_data ] +
                         '</dd>' +
                    '</dl>'
                    ;
                 }
            });

            App.prototype.util.element.get('app-user-data').innerHTML = user_data;
        //
       });
    };

});
