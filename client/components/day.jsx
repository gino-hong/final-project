import React from 'react';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [],
      manga: []
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
    fetch(`/api/entries/${this.props.day}/Anime`, req)
      .then(res => res.json())
      .then(anime => this.setState({ anime }));
    fetch(`/api/entries/${this.props.day}/Manga`, req)
      .then(res => res.json())
      .then(manga => this.setState({ manga }));
  }

  render() {
    return (
      <div className={this.props.day === 'Sunday' ? 'col day' : 'col day mobile-hidden'}>
        <h1>{this.props.day}</h1>
        <h2 className="text-gold">Anime</h2>
        {
          this.state.anime.length !== 0
            ? this.state.anime.map(anime => (
              <div key={anime.entryId} className="flex align-center space-around">
                <p>{anime.title}</p>
                <div className="flex align-center">
                  <i className="fa-solid fa-pen" />
                  <i className="fa-solid fa-trash" />
                </div>
              </div>
            ))
            : <p>Your list is empty.</p>
        }
        <h2 className="text-gold">Manga</h2>
        {
          this.state.manga.length !== 0
            ? this.state.manga.map(manga => (
              <div key={manga.entryId} className="flex align-center space-around">
                <p>{manga.title}</p>
                <div className="flex align-center">
                  <i className="fa-solid fa-pen" />
                  <i className="fa-solid fa-trash" />
                </div>
              </div>
            ))
            : <p>Your list is empty.</p>
        }
      </div>
    );
  }
}
