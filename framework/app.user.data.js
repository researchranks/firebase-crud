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


     //  function getProperties(o) {
     //      var results = [];
     //      function properties(obj) {
     //          var props, i;
     //          if (obj === null) {
     //              return results;
     //          }
     //          if (typeof obj !== 'object' && typeof obj !== 'function') {
     //              return properties(obj.constructor.prototype);
     //          }
     //          props = Object.getOwnPropertyNames(obj);
     //          i = props.length;
     //          while (i--) {
     //              if (!~results.indexOf(props[i])) {
     //                  results.push(props[i]);
     //              }
     //          }
     //          return properties(Object.getPrototypeOf(obj));
     //      }
     //      return properties(o);
     //  }

     //  function getValuesByKey(object, key) {
     //   var values = [];
     //   JSON.stringify(object, function(k, v) {
     //    if (k === key) values.push(v);
     //    return v;
     //   });
     //   return values;
     // }


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
             var a = '';

            snapshot.forEach(function(users){

                user_id = users.key;
                profile_keys = Object.keys( users.exportVal() );
                 console.log( user_id );
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

                     console.log(

                         profile_key +
                          ' : ' +
                         data
                         [user_id]
                         [
                              profile_data
                         ]

                     );
                 }

               //    for(var profile in data[users.key] ){
               //        console.log( user_key );
               //        console.log( data[users.key][profile]  );
               //    }

               //    for(var user_id in users.key){
               //         console.log( users.key );
               //    }

            });

        document.getElementById('app-user-data').innerHTML = user_data;

          // console.log( snapshot.val() );
          // console.log( snapshot.key );
          // console.log( snapshot.child('0').child('type').key );
          // console.log( snapshot.child('0').child('type').val() );


          // traverse(data,process);



            //  var vals = Object.keys(data).map(function (key) {.val()
            //      return data[key];
            //  });
            //
            //  console.log(vals);
            //
            //
            //  var keys = Object.keys(data);
            //
            // for (var i = 0; i < keys.length; i++) {
            //     var val_a = data[keys[i]];
            //     console.log(val_a);
            // }
            //
            // console.log('----------------------------------');
            //

          //    for (var key in data) {
          //       if (Object.prototype.hasOwnProperty.call(data, key)) {
          //           var val_b = data[key];
          //           console.log(val_b);
          //       }
          //   }
            //  a = getProperties(data);
            //  console.log(a);
             //
            // Object.keys(data).forEach(
            //       function( key ){
            //       console.log(key);
            //       console.log( data[key]  );
            //
            // });

             //
            //  results = snapshot.val();
             //
             //
            //  Object.keys(results).forEach(function (prop) {
            //    var value = results[prop];
             //
            //       console.log( results[prop] );
             //
            //       for(var i in value){
            //             console.log(  value[i] );
            //       }
            //  });



            //  results = JSON.parse(results);

            //   Object.keys(results).forEach(function(value){
            //             console.log(value);
            //             Object.keys(value).forEach(function(data){
            //                   console.log(
            //                         results[data]
            //                   );
            //             });
            //    });


             // results = JSON.stringify(snapshot.val());
            //     turn json back to object
            //     results = JSON.parse(results);

            // Object.keys( snapshot.val() ).forEach(function(key){
            //       console.log(key);
            // });
            //
            //
            //
            // Object.keys( snapshot.val() ).forEach(function(key){
            //
            //             for(var value in snapshot.val()[key]){
            //                   console.log(value);
            //
            //       //console.log( snapshot.val()[key].hasOwnProperty[value] ) ;
            //                   // console.log(
            //                   //       Object.keys(
            //                   //             snapshot.val()[key][value]
            //                   //       )
            //                   // );
            //
            //             }
            //
            // });

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
