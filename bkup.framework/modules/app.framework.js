//constructor function
var App = function(){
  if (!(this instanceof App)) {
  // the constructor was called without "new".
  return new App();
  }

  var self = this;
  var display_type;
};

var debug_error;
var debug_succes;
var debug_current_user;
var debug_previous_user;
var debug_user_data;
var debug_data;

var app = new App();
