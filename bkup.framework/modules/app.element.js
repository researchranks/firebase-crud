App.prototype.element = {

  get : function(element_id){
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
