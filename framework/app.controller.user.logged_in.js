define(function(){
    App.prototype.controller.user.logged_in = function(success){

      App.prototype.util.element.get('app-error-message').textContent = 'none';
      App.prototype.util.element.get('app-current-status').textContent = App.prototype.user.status;
      App.prototype.user.email = success.email;

      document.getElementById('app-current-user').textContent = App.prototype.user.email;


      require([
            'framework/app.view.user.logged.in',
            'framework/app.controller.user.data',
            'framework/app.controller.user.data_dropdown',
        ],function(html_data,user_data,user_data_dropdown){

            App.prototype.util.element
            .get('body').innerHTML = html_data;

            App.prototype.util.element
            .get('app-user-data-dropdown-container')
            .innerHTML = App.prototype.controller.user.data_dropdown();
        });


  };

    return{
      app_controller_logged_in : App.prototype.controller.user.logged_in
    };

});
