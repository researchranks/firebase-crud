define(function (require) {

    var App = function(){
        if (!(this instanceof App)) {
        // the constructor was called without "new".
        return new App();

      }
    };

    //
    // var singleton = function () {
    //     return {
    //         date : Date.now()
    //     };
    // }();
    return App;
    // return new App();
});

// define(function (require) {
//     var singleton = function () {
//         return {
//             date : Date.now()
//         };
//     };
//     return singleton();
// });
