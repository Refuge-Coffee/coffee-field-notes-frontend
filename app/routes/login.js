import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend( {
  
  session: service('session'),
  email: "",
  password: "",

  actions: {
    authenticateWithOAuth2() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2', email, password)
        .then(() => {
          this.get('rememberMe') && this.set('session.store.cookieExpirationTime', 60 * 60 * 24 * 14);
        })
        .catch((reason) => {
          debugger;
          this.set('errorMessage', reason.error);
        });
    }
  }
});