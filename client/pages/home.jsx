import React from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      sundayAnime: [],
      sundayManga: [],
      mondayAnime: [],
      mondayManga: [],
      tuesdayAnime: [],
      tuesdayManga: [],
      wednesdayAnime: [],
      wednesdayManga: [],
      thursdayAnime: [],
      thursdayManga: [],
      fridayAnime: [],
      fridayManga: [],
      saturdayAnime: [],
      saturdayManga: []
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
    fetch(`/api/entries/${this.state.day[0]}/Anime`, req)
      .then(res => res.json())
      .then(sundayAnime => this.setState({ sundayAnime }));
    fetch(`/api/entries/${this.state.day[0]}/Manga`, req)
      .then(res => res.json())
      .then(sundayManga => this.setState({ sundayManga }));
    fetch(`/api/entries/${this.state.day[1]}/Anime`, req)
      .then(res => res.json())
      .then(mondayAnime => this.setState({ mondayAnime }));
    fetch(`/api/entries/${this.state.day[1]}/Manga`, req)
      .then(res => res.json())
      .then(mondayManga => this.setState({ mondayManga }));
    fetch(`/api/entries/${this.state.day[2]}/Anime`, req)
      .then(res => res.json())
      .then(tuesdayAnime => this.setState({ tuesdayAnime }));
    fetch(`/api/entries/${this.state.day[2]}/Manga`, req)
      .then(res => res.json())
      .then(tuesdayManga => this.setState({ tuesdayManga }));
    fetch(`/api/entries/${this.state.day[3]}/Anime`, req)
      .then(res => res.json())
      .then(wednesdayAnime => this.setState({ wednesdayAnime }));
    fetch(`/api/entries/${this.state.day[3]}/Manga`, req)
      .then(res => res.json())
      .then(wednesdayManga => this.setState({ wednesdayManga }));
    fetch(`/api/entries/${this.state.day[4]}/Anime`, req)
      .then(res => res.json())
      .then(thursdayAnime => this.setState({ thursdayAnime }));
    fetch(`/api/entries/${this.state.day[4]}/Manga`, req)
      .then(res => res.json())
      .then(thursdayManga => this.setState({ thursdayManga }));
    fetch(`/api/entries/${this.state.day[5]}/Anime`, req)
      .then(res => res.json())
      .then(fridayAnime => this.setState({ fridayAnime }));
    fetch(`/api/entries/${this.state.day[5]}/Manga`, req)
      .then(res => res.json())
      .then(fridayManga => this.setState({ fridayManga }));
    fetch(`/api/entries/${this.state.day[6]}/Anime`, req)
      .then(res => res.json())
      .then(saturdayAnime => this.setState({ saturdayAnime }));
    fetch(`/api/entries/${this.state.day[6]}/Manga`, req)
      .then(res => res.json())
      .then(saturdayManga => this.setState({ saturdayManga }));
  }

  render() {

    if (!this.context.user) return <Redirect to="sign-in" />;

    return (
      <div className="container text-light text-center">
        <div className="row align-self-center">
          <div className="col day">
            <h3>{this.state.day[0]}</h3>
            <h4>Anime</h4>
            {
              this.state.sundayAnime.map(sundayAnime => (
                <div key={sundayAnime.entryId}>
                  <p>{sundayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.sundayManga.map(sundayManga => (
                <div key={sundayManga.entryId}>
                  <p>{sundayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[1]}</h3>
            <h4>Anime</h4>
            {
              this.state.mondayAnime.map(mondayAnime => (
                <div key={mondayAnime.entryId}>
                  <p>{mondayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.mondayManga.map(mondayManga => (
                <div key={mondayManga.entryId}>
                  <p>{mondayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[2]}</h3>
            <h4>Anime</h4>
            {
              this.state.tuesdayAnime.map(tuesdayAnime => (
                <div key={tuesdayAnime.entryId}>
                  <p>{tuesdayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.tuesdayManga.map(tuesdayManga => (
                <div key={tuesdayManga.entryId}>
                  <p>{tuesdayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[3]}</h3>
            <h4>Anime</h4>
            {
              this.state.wednesdayAnime.map(wednesdayAnime => (
                <div key={wednesdayAnime.entryId}>
                  <p>{wednesdayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.wednesdayManga.map(wednesdayManga => (
                <div key={wednesdayManga.entryId}>
                  <p>{wednesdayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[4]}</h3>
            <h4>Anime</h4>
            {
              this.state.thursdayAnime.map(thursdayAnime => (
                <div key={thursdayAnime.entryId}>
                  <p>{thursdayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.thursdayManga.map(thursdayManga => (
                <div key={thursdayManga.entryId}>
                  <p>{thursdayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[5]}</h3>
            <h4>Anime</h4>
            {
              this.state.fridayAnime.map(fridayAnime => (
                <div key={fridayAnime.entryId}>
                  <p>{fridayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.fridayManga.map(fridayManga => (
                <div key={fridayManga.entryId}>
                  <p>{fridayManga.title}</p>
                </div>
              ))
            }
          </div>
          <div className="col day">
            <h3>{this.state.day[6]}</h3>
            <h4>Anime</h4>
            {
              this.state.saturdayAnime.map(saturdayAnime => (
                <div key={saturdayAnime.entryId}>
                  <p>{saturdayAnime.title}</p>
                </div>
              ))
            }
            <h4>Manga</h4>
            {
              this.state.saturdayManga.map(saturdayManga => (
                <div key={saturdayManga.entryId}>
                  <p>{saturdayManga.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;
