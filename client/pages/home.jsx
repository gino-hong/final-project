import React from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';
import Day from '../components/day';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      abbr: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
    };
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('react-context-jwt')
      }
    };
    fetch('/api/entries', req)
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {

    if (!this.context.user) return <Redirect to="sign-in" />;

    return (
      <div>
        <div className="container desktop-hidden">
          <div className="flex space-evenly ptb20">
            {
            this.state.day.map((day, index) => (
              <a href="#" key={index} className="abbr">{this.state.abbr[index]}</a>
            )
            )
          }
          </div>
        </div>
        <div className="container text-light text-center side-margin">
          <div className="row align-self-center mobile-view">
            {
              this.state.day.map(day => (
                <Day key={day} day={day} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;
