define( function(){



  var html_data = (function(){/*

    <p id="app-signup">signup</p>


    <form id="app-login" action=""  autocomplete="off" >
             <label for="usermail">Email</label>
             <input id="app-login-email" type="" name="email" placeholder="yourname@email.com">
             <label for="password">Password</label>
             <input id="app-login-email" type="password" name="password" placeholder="password">

             <input type="submit" value="login">
    </form>

    <form id="app-signout" action="" autocomplete="off" >
       <input type="submit" value="signout">
   </form>

    <dl>

       <dt>status:
        <dd id='app-online-status'></dd>
         <dd id='app-current-status'></dd>
      </dt>

      <dt>last user:
       <dd id='app-last-user'></dd>
      </dt>

      <dt>current user:
          <dd id='app-current-user'></dd>
      </dt>

      <dt>user data:
          <dd id='app-user-data'></dd>
      </dt>

      <dt>error message:
          <dd id='app-error-message'></dd>
      </dt>

    </dl>
  */});

  return App.prototype.util.template(html_data);
});
