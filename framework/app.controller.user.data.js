define(function(){
    App.prototype.controller.user.data = function(){

        var user_data = '';
        var user_uid = '';

        var get_data = function(){
                user_uid = firebase.auth().currentUser.uid;

                var query = firebase.database()
                .ref('users/'+user_uid).orderByKey();

                query.once('value')
                .then(
                  function(snapshot){

                      data =  snapshot.exportVal();

                      for(var value in data ){
                          user_data +=
                          '<mark>_data_</mark>'+
                          '<dt>'+
                                value+
                              '<dd>'+
                              data[ value ]+
                              '</dd>'+
                          '</dt>';

                     }

                     App.prototype.util.element.get('app-user-data').innerHTML = Date.now() + user_data;


                 });
        };

          require([
              'framework/app.view.user.data',
          ],function(html_data){
              App.prototype.user.view = '';
              App.prototype.user.view = html_data;
              App.prototype.util.element.get('app-user-container').innerHTML = html_data;

              get_data();
              App.prototype.util.element.get('app-user-data').innerHTML = user_data;


          });
    };

    return{
      app_controller_user_data : App.prototype.controller.user.data
    };

});
