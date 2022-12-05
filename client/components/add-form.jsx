import React from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      category: '',
      title: ''
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
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/add-entry', req)
      .then(res => res.json())
      .then();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="mb-3 text-center">
          <div>
            <label htmlFor="day" className="form-label text-light">
              Day
            </label>
          </div>
          <div>
            <select
              required
              autoFocus
              id="day"
              name="day"
              onChange={handleChange}
              className="">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        </div>
        <div className="mb-3 text-center">
          <div>
            <label htmlFor="category" className="form-label text-light">
              Category
            </label>
          </div>
          <div>
            <select
              required
              autoFocus
              id="category"
              name="category"
              onChange={handleChange}
              className="">
              <option value="Monday">Anime</option>
              <option value="Tuesday">Manga</option>
            </select>
          </div>
        </div>
        <div className="mb-3 text-center">
          <div>
            <label htmlFor="title" className="form-label text-light">
              Title
            </label>
          </div>
          <div>
            <input
              required
              id="title"
              type="text "
              name="title"
              onChange={handleChange}
              className="mb-5" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <a href="#" className="btn btn-secondary">
              Cancel
            </a>
          </small>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
