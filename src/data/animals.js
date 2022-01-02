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

export default animals