import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddPost extends Component {
  state = {
    subreddit: '',
    poster: '',
    title: '',
    src: ''
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  
  submitPost = e => {
    console.log("submitted");
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Subreddit:
      <input type="text" name="subreddit" value={this.state.subreddit} onChange={this.handleChange} />
        </label>
        <label>
          Poster:
      <input type="text" name="poster" value={this.state.poster} onChange={this.handleChange} />
        </label>
        <label>
          Title:
      <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Source:
      <input type="text" name="src" value={this.state.src} onChange={this.handleChange} />
        </label>
        <input className="btn btn-primary" onSubmit={this.submitPost} type="submit" value="Submit" />
      </form>
    );
  }
}

const mapPropsToDispatch = dispatch => ({

})

export default connect(null, mapPropsToDispatch)(AddPost);