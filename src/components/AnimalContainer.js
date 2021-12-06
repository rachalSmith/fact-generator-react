import React from 'react';
import PropTypes from 'prop-types';


class AnimalContainer extends React.Component {

  render() {
      return (
          <div className="animal-container">
             <div onClick={this.props.randomFact}>
               {this.props.animalImage}
               {this.props.displayFact}
              </div>
          </div>
      )
    }
}

// PropTypes
AnimalContainer.propTypes = {
  animalImage: PropTypes.object.isRequired
}

export default AnimalContainer;
