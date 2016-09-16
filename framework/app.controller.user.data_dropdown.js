define(function(){
    App.prototype.controller.user.data_dropdown = function(){

        var user_data = '';
        var user_uid = '';
        var user_option_value = '';
        var user_options;
        var data;
        var firebase_url;
        var user_current_option;

        var get_firebase_query = function(){
                user_uid = firebase.auth().currentUser.uid;

                var query = firebase.database()
                .ref('users/'+user_uid).orderByKey();

                query.once('value')
                .then(
                  function(snapshot){

                      data =  snapshot.exportVal();
                      user_data +=
                      '<option value="" disabled="disabled" selected="selected">Please Select A Value</option>';

                      for(var value in data ){
                          user_data +=
                          '<option class="app-option" id="app-option-'+ value +'"'+
                          'value="">'+
                                value+
                          '</option>';

                     }
                })
                .then(function(){

                    App.prototype.util.element
                    .get('app-user-data-dropdown')
                    .innerHTML = user_data;

                }).then(function(){
                    user_options = document.getElementsByClassName('app-option');
                    for(var option_value in user_options){

                        if(App.prototype.util.element.get(option_value)){
                        }
                    }
                });
        };



          require([
              'framework/app.view.user.data.dropdown',
          ],function(html_data){
              App.prototype.user.view = '';
              App.prototype.user.view = html_data;
              App.prototype.util.element
              .get('app-user-data-dropdown-container')
              .innerHTML = html_data;

              get_firebase_query();

              App.prototype.util.element
              .get('app-user-data-dropdown')
              .addEventListener('change',function(){
                 user_current_option = this.options[this.selectedIndex].textContent;

                  var user_input = App.prototype.util
                  .element.get('app-user-data-option-value');

                  var user_input_status = App.prototype.util
                  .element.get('app-user-data-option-status');

                  user_input_status.style.display = 'none';

                  firebase_url = 'users/'+user_uid+'/'+user_current_option;
                  firebase.database().ref(firebase_url).on('value',function(data){
                    user_input.value = data.val();
                });


     user_input.addEventListener('change',function(){
            user_input_status.style.display = 'block';
            user_input_status.textContent = 'update value?';
            user_input_status.style.background = '#efebad';

            user_input_status.addEventListener(
                'click',
                function(){
                        var firebase_updated_data = function(key,value){
                                    var data = {};
                                    data[key] = value;
                                    return data;
                        };


                        firebase_url = 'users/'+user_uid+'/';

                        firebase.database()
                        .ref(firebase_url)
                        .update(
                            firebase_updated_data(
                                user_current_option,
                                user_input.value),
                            function(success){
                                console.log(success);
                            }
                        )
                         .then(function(){
                             user_input_status.textContent = 'done';
                             user_input_status.style.background = '#afe3a5';
                         });

                    },false);
                  },false);
              });

          });
    };

    return{
      app_controller_user_data_dropdown : App.prototype.controller.user.data_dropdown
    };

});
