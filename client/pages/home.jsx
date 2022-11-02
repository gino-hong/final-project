import React from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/api/entries')
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {

    if (!this.context.user) return <Redirect to="sign-in" />;

    return (
      <div />
    );
  }
}

Home.contextType = AppContext;
