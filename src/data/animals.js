import camel from '../images/camel.jpg';
import dolphin from '../images/dolphin.jpg';
import snowLeopard from '../images/snow-leopard.jpg'


const animals = {
  camel: {
    image:
      <img
        className="animal-image"
        title="animal-image"
        src={camel}
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
        title="animal-image"
        src={dolphin}
        alt="dolphin"
      />,
    facts: [
      'Dolphins sleek, elogated (streamlined) shape allows them to swim through the water with ease.',
      'Dolphins have a decreased surface-area to volume ratio to reduce heat loss.',
      'Dolphins body fat provides insulation against the cold.'
    ],
  },

  snowLeopard: {
    image:
      <img
        className="animal-image"
        title="animal-image"
        src={snowLeopard}
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