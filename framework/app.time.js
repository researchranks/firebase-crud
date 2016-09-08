define(function(){

  App.prototype.time = function(){
    return Date.now();
  }();

  return App.prototype.time;

});
