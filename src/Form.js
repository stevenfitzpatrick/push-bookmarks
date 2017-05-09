import React, { Component } from 'react';
import LoggedInHoc from './HOCLoggedIn';
import firebase from './firebase';

class Form extends Component {
  state = {
    title: '',
    url: '',
    description: '',
    author: '',
    tags: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, url, description, author, tags } = this.state;
    const tagsToArray = tags.split(',').map(tag => tag.trim());
    const body = {
      title,
      description,
      url,
      author,
      favourite: false,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
      tags: tagsToArray
    };
    firebase.database().ref('/favourites').push(body).then(snap => {
      this.setState({
        title: '',
        url: '',
        description: '',
        author: '',
        tags: ''
      });
    });
  };

  handleChange = e => {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { title, author, url, tags, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={title}
            required
            autoFocus
            placeholder="Title"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="Url">Url</label>
          <input
            name="url"
            type="text"
            value={url}
            required
            placeholder="Url"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            type="author"
            required
            placeholder="Author URL"
            value={author}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            required
            placeholder="Favourite Description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <input
            name="tags"
            type="text"
            value={tags}
            required
            placeholder="Sample Tags"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoggedInHoc(Form);
