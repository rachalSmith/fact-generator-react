import React from 'react';
import PropTypes from 'prop-types';


class TextContainer extends React.Component {

  render() {
      return (
          <div className="text-container">
             <div onClick={this.props.randomFact}>
               <p data-testid="text">{this.props.displayFact}</p>
              </div>
          </div>
      )
    }
}

// PropTypes
TextContainer.propTypes = {
  displayFact: PropTypes.string.isRequired
}

export default TextContainer;
