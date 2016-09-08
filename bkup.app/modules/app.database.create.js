App.prototype.database.create = function(parent_node,child_node,node_data){

  if(parent_node && child_node && node_data !== null || 'undefined'){
    firebase.database()
      .ref( parent_node )
      .child( child_node )
      .set( node_data )
      .then(
          function(success){
                  debug_success = success;
                  console.log(
                    //success.code,
                    success.message
                  );
              },
          function(error){
                  debug_error = error;
                  document.getElementById('app-error-message').textContent = error.message;

                  return console.error(
                     error.message,
                     error.code
                   );
          }
      );
  }
};
