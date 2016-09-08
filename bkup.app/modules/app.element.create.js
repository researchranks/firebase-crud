App.prototype.element.create = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    document.body.appendChild(element);
    this.element.hide(element_id);
};
