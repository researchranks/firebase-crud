define( function(){
    App.prototype.element = {

      get : function(element_id){

          if(element_id === 'body'){
              return document.querySelectorAll(element_id)[0];
          }

          if(element_id.match(/\[/)){
             return document.querySelectorAll(element_id)[0];
          }

          return document.getElementById(element_id);
      },


      create : function(element_type,element_id){
        var element = document.createElement(element_type);
        element.setAttribute('id',element_id);
        document.body.appendChild(element);
        self.element.hide(element_id);
      },

      hide : function(element_id){
        var element = document.getElementById(element_id);
        display_type = element.style.display;
        element.style.display = 'none';

      },

     show : function(element_id){
        var element = document.getElementById(element_id);
        element.style.display = display_type;
      }

    };

    return App.prototype.element;
});
