import React, { Component } from 'react';
import LoggedInHoc from '../HOC/HOCLoggedIn';
import firebase from '../../firebase';
import PropTypes from 'prop-types';

import { FormButton, Input } from './style';

class Form extends Component {
  static propTypes = {
    uuid: PropTypes.string.isRequired
  };

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

    fetch(
      `https://stevenfitzpatrick-5181b.firebaseio.com/favourites.json?auth=${this.props.uuid}`,
      {
        method: 'POST',
        body: JSON.stringify(body)
      }
    );
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
          <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Input
            name="tags"
            type="text"
            value={tags}
            required
            placeholder="Sample Tags"
            onChange={this.handleChange}
          />
        </div>
        <FormButton type="submit">Submit</FormButton>
      </form>
    );
  }
}

export default LoggedInHoc(Form);
