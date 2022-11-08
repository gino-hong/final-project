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
      <div className="col day">
        <h1 className="text-gold">{this.props.day}</h1>
        <h2>Anime</h2>
        {
          this.state.anime.map(anime => (
            <div key={anime.entryId}>
              <p>{anime.title}</p>
            </div>
          ))
        }
        <h2>Manga</h2>
        {
          this.state.manga.map(manga => (
            <div key={manga.entryId}>
              <p>{manga.title}</p>
            </div>
          ))
        }
      </div>
    );
  }
}
