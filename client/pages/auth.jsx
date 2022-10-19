import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {
  render() {

    const { user, route, handleSignIn } = this.context;

    if (user) return <Redirect to="" />;

    const welcomeMessage = route.path === 'sign-in'
      ? 'Please sign in to continue'
      : 'Create an account to get started!';

    const welcomeImage = route.path === 'sign-in'
      ? './images/mobile-saber.png'
      : './images/mobile-mash.png';

    return (
      <div className="">
        <div className="">
          <header className="">
            <h2 className="">
              <i className="" />
              Otracku
            </h2>
            <img src={welcomeImage} />
            <p className="">{welcomeMessage}</p>
          </header>
          <div className="">
            <AuthForm
              key={route.path}
              action={route.path}
              onSignIn={handleSignIn} />
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.contextType = AppContext;
