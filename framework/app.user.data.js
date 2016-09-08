define(function(){
      App.prototype.user.data = function(){

      var user_data_key = '';
      var user_data_value = '';
      var user_data = '';
      var key;
      var key_data;

      var value;
      var value_data = '';
      var value_key = '';



        firebase.database()
        .ref()
        .once('value')
        .then(
          function(snapshot){

             // results = JSON.stringify(snapshot.val());
            //     turn json back to object
            //     results = JSON.parse(results);

            Object.keys( snapshot.val() ).forEach(function(key){
                  console.log(key);
            });

            Object.keys( snapshot.val() ).forEach(function(key){

                        for(var value in snapshot.val()[key]){
                              console.log(value);

                              console.log(
                                    Object.keys(
                                          snapshot.val()[key][value]
                                    )
                              );

                        }

            });

                  // Object.keys( snapshot.val()[key])
                  // .foreach(function(value){
                  //       console.log(value);
                  // });



            // for( var result in snapshot.val() ){
            //
            //       for( var data in snapshot.val()[result] ){
            //             console.log( snapshot.val()[result][data] );
            //       }
            //
            // }

            // Object.keys( snapshot.val() ) ;





            // var results  = snapshot.val();
            //
            //     for(var i=0; i < results.length; i++){
            //           console.log( results[i] );
            //     }
            //


            //     Object.keys(results).forEach(function(key) {
            //            results[key].forEach(function(elem, index) {
            //                console.log(elem, index);
            //            });
            //       });

       });

      //  var results = snapshot.val();
      //  for ( var i in results ){
      //        results[i].forEach(
       //
      //            function(key,value){
       //
      //                console.log(key);
      //                console.log(value);
       //
      //       });
      //  }
       //
       //



    //   firebase.database()
    //   .ref()
    //   .once('value')
    //   .then(
    //     function(snapshot){
    //        debug_user_data = snapshot.val();
    //        debug_data = snapshot.val();
      //
    //        //console.log( snapshot.val() );
      //
      //
      //
    //       for ( var property in snapshot.val() ){
      //
      //
    //         key = property;
    //         data = snapshot.val()[property];
      //
    //         // console.log( key );
    //         // console.log( value );
      //
    //         //
    //         //
    //         for( var value in snapshot.val()[key] ){
    //             // value_data += snapshot.val()[property][data_key];
    //             // console.log( data_key );
    //             //
    //             //
    //             value_data +=
    //             '<dd>' +
    //                     snapshot.val()[key][value]   +
    //             '</dd>';
      //
    //             console.log(snapshot.val()[key][value]);
    //         }
      //
    //         // Object.keys(value)
    //         // Object.values(value)
      //
      //
    //         for(var k in Object.keys(data)){
    //             key_data +=
    //                 '<dt>' +
    //                     Object.keys(data)[k]  +
    //                 '</dt>';
    //         }
      //
      //
    //         // for(var v in Object.keys(data)){
    //         //     value_data +=
    //         //         '<dd>' +
    //         //             Object.keys(data)[v]  +
    //         //         '</dd>';
    //         //
    //         // }
      //
    //         // console.log( Object.keys(snapshot.val()[property])  );
      //
      //
    //         user_data +=
    //          '<dt>'+ key + '</dt>'+
    //          '<dd>'+
    //             '<dt>' +
    //                 key_data +
    //                 value_data +
    //             '</dt>' +
    //          '</dd>'+
    //          '</dt>';
      //
    //     }
      //
    //       //  for(var i in snapshot.val() ){
    //        //
    //       //   var key = i;
    //       //   var data = snapshot.val();
    //       //   var value = i;
    //        //
    //        //
    //       //  }
      //
      //
    //         document.getElementById('app-user-data').innerHTML = user_data;
      //
    //     }
    //   );


    };

});
