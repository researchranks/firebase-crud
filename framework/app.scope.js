define(function(){

  App.prototype.scope = function(){
    this.time = Date.now();
    return this.time;
    //return this.config();
  };

  return App.prototype.scope;

});
