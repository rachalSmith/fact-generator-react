import { render, screen } from '@testing-library/react';

import AnimalImageContainer from "../AnimalImageContainer";
import animals from "../../../data/animals";


it('should render an image of a camel as a prop', async () => {
    render(<AnimalImageContainer animalImage={animals.camel.image}/>)
    const  imageElement = screen.getByAltText(/camel/i);
    expect(imageElement).toBeVisible()
})
