import React from 'react';

import TextContainer from './TextContainer';
import AnimalImageContainer from './AnimalImageContainer'
import animals  from '../data/animals';


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
            <AnimalImageContainer
              data-testid="camel"
              animalImage={ animals.camel.image }
              randomFact={ this.handleClick }
              test = {"hello"}
            />
            <AnimalImageContainer
              animalImage={ animals.dolphin.image }
              randomFact={ this.handleClick }
            />
            <AnimalImageContainer
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