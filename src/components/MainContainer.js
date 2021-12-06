import React from 'react';
import AnimalContainer from './AnimalContainer';
import TextContainer from './TextContainer';


const animals = {
  camel: {
    image:
      <img
        className="animal-image"
        src={require('../images/camel.jpg').default}
        alt="camel"
      />,
    facts: [
      'Camels have large, flat feet to spread their weight on the sand.',
      'Camels have thick fur on the top of the body for shade, and thin fur elsewhere to help heat loss.',
      'Camels have slit-like nostrils and two rows of eyelashes - to help keep out sand.',
      'Camels have a large surface-area to volume ratio to increase heat loss.'
    ],
  },

  dolphin: {
    image:
      <img
        className="animal-image"
        src={require('../images/dolphin.jpg').default}
        alt="dolphin"
      />,
    facts: [
      'Dolphin\'s sleek, elogated (streamlined) shape allows them to swim through the water with ease.',
      'Dolphins have a decreased surface-area to volume ratio to reduce heat loss.',
      'A dolphin\'s body fat provides insulation against the cold.'
    ],
  },

  snowLeopard: {
    image:
      <img
        className="animal-image"
        src={require('../images/snow-leopard.jpg').default}
        alt="snowLeopard"
      />,
    facts: [
      'Snow leopards have small ears to reduce heat loss.',
      'Snow leopards have patterned fur gives them camouflage in their snowy, rocky habitat.',
      'Snow leopards have large feet to spread their weight on the snow.'
    ],
  }
}

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFact: 'Click on the picture to find out how the animal has adapted to it\'s environment.'
    };
  }

  handleClick = (e) => {
    // Collects alt of animal and uses alt to get a random fact about that animal.
    let selectedAnimal = e.target.alt;
    let animalFacts = Object.values(animals[selectedAnimal].facts);
    let randomNumber= Math.floor(Math.random() * animalFacts.length);

    this.setState({
      displayFact: animalFacts[randomNumber]
    });
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <TextContainer
            randomFact={ this.handleClick }
            displayFact={ this.state.displayFact }
          />
          <div className="animals-container">
            <AnimalContainer
              animalImage={ animals.camel.image }
              randomFact={ this.handleClick }
            />
            <AnimalContainer
              animalImage={ animals.dolphin.image }
              randomFact={ this.handleClick }
            />
            <AnimalContainer
              animalImage={ animals.snowLeopard.image }
              randomFact={ this.handleClick }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;