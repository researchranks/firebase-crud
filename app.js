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
            'modules/app.framework',
            'modules/app.config',
            'modules/app.init',
        ],function(){
            // require([
            //     'app/main',
            // ],function(){
            //
            //
            // });

            console.log( 'loaded' );
            app.config();

            require([
                // 'app/firebase.config',

                'modules/app.database',
                'modules/app.database.create',

                'modules/app.element',
                'modules/app.element.create',
                // 'modules/app.example',
                // 'modules/app.import',
                // 'modules/app.parent.child',
                // 'modules/app.parent',

                'modules/app.update',
                'modules/app.update.user',
                'modules/app.user',

                'modules/app.user.signin',
                'modules/app.user.signout',

                'modules/app.user.status',
                'modules/app.user.data',
                'modules/app.user.email',


                'modules/app.update.user.status',

                'modules/app.update.user.email',

                'modules/app.view.login',


            ],function(){
                app.init();
            });

        });

});
