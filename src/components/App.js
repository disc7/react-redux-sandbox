import React, {PropTypes} from 'react';
import Header from './common/header';

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <Header />
          {this.props.children}
        </div>
      );
  }
}

// Exports a range of validators that can be used to make sure the data you receive is valid
// Only used in development mode.
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
