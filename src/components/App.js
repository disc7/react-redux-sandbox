import React, {PropTypes} from 'react';
import Header from './common/header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <Header
          loading={this.props.loading}
          />
          {this.props.children}
        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

// Exports a range of validators that can be used to make sure the data you receive is valid
// Only used in development mode.
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
