requirejs.config({

    baseUrl: 'lib',
    paths : {
            app : '../app',
            modules : '../app/modules'
    }
});

require([

    'https://www.gstatic.com/firebasejs/3.3.0/firebase.js',
    ],function(){

        require([
            'app/firebase.framework.0.1',
            'app/firebase.config',
            'app/main'
        ],function(){
            console.log( 'loaded' );
        });

});
