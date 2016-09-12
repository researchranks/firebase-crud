define( function(){

  var html_data = (function(){/*

    <mark id="app-signin"> back to signin </mark>

    <form id="app-signup" action=""  autocomplete="off" >
         <label for="usermail">Email</label>
         <input id="app-login-email" type="" name="email" placeholder="yourname@email.com">
         <label for="password">Password</label>
         <input id="app-login-email" type="password" name="password" placeholder="password">

         <input type="submit" value="signup">

      </form>
  */});

 return App.prototype.util.template(html_data);

});
