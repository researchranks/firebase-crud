define(function(){
    App.prototype.util.online = function(){


   //!!! WORKS !!!!
    // setInterval(function () {
    //     // call this.countUp() using our new created variable.
    //     // this has to be done as this would normally call something
    //     // inside this function, so we have to pass it as own
    //     // variable over
    //     App.prototype.util.timestamp();
    // }, 50000);




    //clearTimeout(timer);

    // var ts = function(){
    //         return console.log( Date.now() );
    // };
    //
    // return setTimeout(function(){
    //
    //     return ts();
    //
    // },500);

     //
    //     var tmFunc = function(){ exec(); };
     //
    //     function exec(){
    //          console.log(Date.now());
    //     }
     //
    //  setTimeout(function(){}.bind(tmFunc(), 5000));




    //
    // return    window.addEventListener('online', function() {
    //         return setTimeout(
    //            function(){
    //                 console.log( 'online -' + '  ' + Date.now() );
    //            }, 100);
    //         });
         //
        //  window.addEventListener('offline', function() {
        //     return setTimeout(
        //        function(){
        //             console.log( 'offline -' + '  ' + Date.now() );
        //        }, 100);
        //     });





    //
    // // var update_online_status = function(){
    //         if(App.prototype.util.status.online){
    //              App.prototype.util.element.get('app-online-status').textConent = 'online';
    //         }else{
    //             App.prototype.util.element.get('app-online-status').textConent = 'offline';
    //         }
    // // };
    //
    // var app_online_status = App.prototype.util.element.get('app-online-status');
    //
    // if(navigator.onLine){
    //     App.prototype.util.request(
    //            'http://httpstat.us/204',
    //            'status',
    //            function(data){
    //                if(data > 0){
    //                    console.log ('online' );
    //                    App.prototype.util.status.online = true;
    //
    //
    //                }else{
    //                    console.log ('offline' );
    //                    App.prototype.util.status.online = false;
    //
    //               }
    //        });
    //
    //    }else if(!navigator.onLine){
    //        console.log ('offline' );
    //        App.prototype.util.status.online = false;
    //
    //    }

    //    console.log(Date.now());
    // if(navigator.onLine){
    //         App.prototype.util.request(
    //         'http://httpstat.us/204',
    //         'status',
    //         function(data){
    //             if(data > 0){
    //                 console.log ('online' );
    //                 App.prototype.util.status.online = true;
    //                 return App.prototype.util.status.online;
    //             }else{
    //                 console.log ('offline' );
    //                 App.prototype.util.status.online = false;
    //                 return App.prototype.util.status.online;
    //             }
    //     });
    // }else{
    //     console.log('loop broke');
    //     App.prototype.util.status.online = false;
    //     return App.prototype.util.status.online;
    //     // App.prototype.util.element.get('app-online-status').textContent = 'offline';
    // }



    // return setTimeout(function(){
    //
    //     App.prototype.util.online();
    //
    //     if(App.prototype.util.status.online){
    //          App.prototype.util.element.get('app-online-status').textContent = 'online';
    //     }else{
    //         App.prototype.util.element.get('app-online-status').textContent = 'offline';
    //     }
    //
    // },3000);

        // return setTimeout(App.prototype.util.online,5000);

    };




    return{
        app_util_online : App.prototype.util.online,
    };

});
