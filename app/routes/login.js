import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import config from '../config/environment';

export default Route.extend( {
  
  session: service('session'),

  actions: {
    authenticateWithOAuth2() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password)
        .then(() => {
          this.get('rememberMe') && this.set('session.store.cookieExpirationTime', 60 * 60 * 24 * 14);
        })
        .catch((reason) => {
          this.set('errorMessage', reason.error);
        });
    }
  }
});