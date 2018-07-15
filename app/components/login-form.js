import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session: service('session'),
  email: "",
  password: "",

  actions: {
    authenticateWithOAuth2() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2', email, password)
        .then(() => {
          console.log("User logged in!")  
        })
        .catch((error) => {
          this.set('errorMessage', error.message);
        });
    }
  }
});
