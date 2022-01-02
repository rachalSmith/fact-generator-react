import React from 'react';
import PropTypes from 'prop-types';


class AnimalImageContainer extends React.Component {

  render() {
      return (
          <div className="animal-container" data-testid="animal-image">
             <div onClick={this.props.randomFact}>
               {this.props.animalImage}
               {this.props.displayFact}
              </div>
          </div>
      )
    }
}

// PropTypes
AnimalImageContainer.propTypes = {
  animalImage: PropTypes.object
}

export default AnimalImageContainer;
