import React from 'react';
import PropTypes from 'prop-types';


class TextContainer extends React.Component {

  render() {
      return (
          <div className="text-container">
               <p data-testid="text">{this.props.displayFact}</p>
          </div>
      )
    }
}

// PropTypes
TextContainer.propTypes = {
  displayFact: PropTypes.string.isRequired
}

export default TextContainer;
