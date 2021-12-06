import React from 'react';
import PropTypes from 'prop-types';


class TextContainer extends React.Component {

  render() {
      return (
          <div className="text-container">
             <div onClick={this.props.randomFact}>
               <p>{this.props.displayFact}</p>
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
