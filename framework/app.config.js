define( function(){
    require(['framework/app.status']);

    App.prototype.config = function(){

    var firebase_config = {
            apiKey: "AIzaSyDv_7OBolNgHafXT1k2vCXQDNwW2fCHgy0",
            authDomain: "dashboard-859d7.firebaseapp.com",
            databaseURL: "https://dashboard-859d7.firebaseio.com",
            storageBucket: ""
    };

     try{
            console.log( firebase.initializeApp(firebase_config) );
            this.constructor.prototype.status = true;
        }
        catch(error){
            this.constructor.prototype.status    = error.message;
        }


    };

});
