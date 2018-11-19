import React, { Component } from 'react';
import MainPage from './postspage';
import AddPost from './submits';
import { Switch, Route, Link } from 'react-router-dom';


/**
 * These are sample imports if you are using Redux in 
 * a particular component
 * 
 * import { connect } from 'react-redux';
 * import {  } from './actions';
 */

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/' className='btn'>Main Page </Link>
        <Link to='/add' className='btn'>Add Post</Link>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/add' component={AddPost} />
        </Switch>
      </div>
    );
  }
}

/**
 *    sample code for adding redux state and dispatch
 *    > const mapStateToProps = state => ({ });
 *    > const mapPropsToDispatch = dispatch => ({ })
 *    > export default connect(mapStateToProps, mapPropsToDispatch)(App);
 */

export default App;