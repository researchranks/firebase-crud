define(function(){

  App.prototype.controller.user.input = function(){


    require([
        'framework/app.view.user.input',
    ],function(html_data){
        App.prototype.user.view = '';
        App.prototype.user.view = html_data;
        App.prototype.util.element
        .get('app-user-data-input-container').innerHTML = html_data;
    });

  };

  return {
      app_controller_user_input : App.prototype.controller.user.input
  };

});
