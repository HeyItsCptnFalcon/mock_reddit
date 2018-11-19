import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';



class AddPost extends Component {
  state = {
    subreddit: '',
    poster: '',
    title: '',
    src: ''
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  submitPost = e => {
    e.preventDefault();

    this.props.sendNewPost(this.state);

    this.setState({
      subreddit: '',
      poster: '',
      title: '',
      src: ''
    });
  }

  render() {
    let { subreddit, poster, title, src } = this.state;
    return (
      <form onSubmit={this.submitPost}>
        <div className="form-group">
          <label>Subreddit:</label>
          <input type="text" name="subreddit" value={subreddit} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Poster:</label>
          <input type="text" name="poster" value={poster} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Source:</label>
          <input type="text" name="src" value={src} onChange={this.handleChange} className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

const mapPropsToDispatch = dispatch => ({
  sendNewPost: post => {dispatch (addPost(post))}

})

export default connect(null, mapPropsToDispatch)(AddPost);