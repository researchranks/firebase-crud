App.prototype.user.data = function(){

      var user_data_key = '';
      var user_data_value = '';
      var user_data = '';
      var key;
      var value;

      firebase.database()
      .ref()
      .once('value')
      .then(
        function(snapshot){
           debug_user_data = snapshot.val();
           debug_data = snapshot.val();

           //console.log( snapshot.val() );



          for ( var property in snapshot.val() ){


            key = property;
            value = snapshot.val()[property];

            console.log( key );
            console.log( value );

            // for( var data_key in snapshot.val()[property] ){
            //     console.log( data_key );
            //     console.log( snapshot.val()[property][data_key] );
            //   }

          }

          //   user_data +=
          //    '<dt>'+ key + '</dt>'+
          //    '<dd>'+
          //      value+
          //    '</dd>'+
          //    '</dt>';
          // }


          //  for(var i in snapshot.val() ){
           //
          //   var key = i;
          //   var data = snapshot.val();
          //   var value = i;
           //
           //
          //  }


            document.getElementById('app-user-data').innerHTML = user_data;

        }
      );
};
