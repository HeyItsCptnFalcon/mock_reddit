import React from 'react';
import { connect } from 'react-redux';

const getHoursFromNow = time => new Date(new Date() - new Date(time)).getHours();

const MainPage = props => {
  return ( 
    <div>
      {props.posts.map(x => (
        <div key={x.id}>
        <h3>{x.subreddit}</h3>
        <h3>{x.poster}</h3>
        <h3>{x.title}</h3>
        <img src={x.src} />
        <h3>Posted {getHoursFromNow(x.timeOfPost)}hours ago</h3>

        </div>
      ))}

    </div>
   );
}

const mapStateToProps = state =>({
  posts: state.posts,
  redirect: state.redirect
})
 
export default connect(mapStateToProps)(MainPage);