import React, { Component } from 'react';
import AddPost from './components/submits';

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
        <AddPost />
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