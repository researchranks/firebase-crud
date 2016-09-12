define( function(){

    App.prototype.util.template = function(html_template){

        //remove long form javascript comment to return raw html for template
        return html_template.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    };

    return App.prototype.util.template;

});
