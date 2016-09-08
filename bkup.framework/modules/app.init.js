App.prototype.init = function(){
  this.user.signout();
  document.getElementById('app-current-status').textContent = this.user.status;
  document.getElementById('app-current-user').textContent = 'none';
  document.getElementById('app-last-user').textContent = 'none';
  document.getElementById('app-error-message').textContent = 'none';
  document.getElementById('app-user-data').textContent = 'none';
 return this.user.signout();

};
