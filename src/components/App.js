import React from 'react';
import PropTypes from 'prop-types';

// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
