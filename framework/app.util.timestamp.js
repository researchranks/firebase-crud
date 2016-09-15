define(function(){
    App.prototype.util.timestamp = function(){
      return console.log(Date.now());
    };

    return {
      app_prototype_util_timestamp : App.prototype.util.timestamp
    };

});
