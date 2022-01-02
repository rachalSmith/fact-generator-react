import { render, screen } from '@testing-library/react';

import AnimalImageContainer from '../AnimalImageContainer';



it('should render images to the screen', () => {
    render(<AnimalImageContainer />);
    const animalImages = screen.getAllByTestId('animal-image')

    expect(animalImages).toBeDefined();
});


// it(/*Text container*/'should initially render instruction text')
// it(/*Text container*/'should render a fact about that animal when clicked')
// it(/*Text container*/'should render a fact about a different animal when a different animal is clicked')
// it(/*Text container*/'should render a random fact')