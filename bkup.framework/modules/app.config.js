App.prototype.config = function(){

  var firebase_config = {
      apiKey: "AIzaSyDv_7OBolNgHafXT1k2vCXQDNwW2fCHgy0",
      authDomain: "dashboard-859d7.firebaseapp.com",
      databaseURL: "https://dashboard-859d7.firebaseio.com",
      storageBucket: ""
  };

  return firebase.initializeApp(firebase_config);


};
