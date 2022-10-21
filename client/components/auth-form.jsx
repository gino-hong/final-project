import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternatActionText = action === 'sign-up'
      ? 'Sign in instead'
      : 'Register now';
    const submitButtonText = action === 'sign-up'
      ? 'Register'
      : 'Log In';
    return (
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="mb-3 text-center">
          <div>
            <label htmlFor="username" className="form-label text-light">
              Username
            </label>
          </div>
          <div>
            <input
              required
              autoFocus
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
              className="" />
          </div>
        </div>
        <div className="mb-3 text-center">
          <div>
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
          </div>
          <div>
            <input
            required
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="mb-5" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <a className="text-gold" href={alternateActionHref}>
              {alternatActionText}
            </a>
          </small>
          <button type="submit" className="btn-gold">
            {submitButtonText}
          </button>
        </div>
      </form>
    );
  }
}
