define(function(){
    App.prototype.controller.user.data_dropdown = function(){

        var user_data = '';
        var user_uid = '';
        var user_option_value = '';
        var user_options;
        var data;
        var log = function(){
            console.log(this);
        };







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

                            //     value+
                            //   '<dd>'+
                            //   data[ value ]+
                            //   '</dd>'+
                            //

                     }


                    //  App.prototype.util.element.get('app-user-data').innerHTML = Date.now() + user_data;


                })
                .then(function(){

                    App.prototype.util.element
                    .get('app-user-data-dropdown')
                    .innerHTML = user_data;

                    console.log(user_data);


                }).then(function(){
                    user_options = document.getElementsByClassName('app-option');
                    for(var option_value in user_options){

                        if(App.prototype.util.element.get(option_value)){
                            // console.log(option_value);

                            console.log( App.prototype.util
                            .element.get(option_value)
                            );

                        }
                        // console.log(user_options[option_value]);
                        // user_options[option_value].textContent = option_value;
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
                  var current_value = this.options[this.selectedIndex].textContent;
                  var user_input = App.prototype.util
                  .element.get('app-user-data-option-value');


                  firebase_url = 'users/'+user_uid+'/'+current_value;

                  firebase.database().ref(firebase_url).on('value',function(data){
                        // console.log( data.val() );
                        //
                        user_input.value = data.val();
                    });

                  console.log(this.options[this.selectedIndex].textContent);



                  //console.log(this.options[this.selectedIndex].id);
              });

          });
    };

    return{
      app_controller_user_data_dropdown : App.prototype.controller.user.data_dropdown
    };

});
