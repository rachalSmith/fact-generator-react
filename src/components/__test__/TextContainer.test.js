import { fireEvent, render, screen } from '@testing-library/react';

import App from '../../App'


describe('text container', () => {

    const instructions = /Click on the picture to find out how the animal has adapted to it\'s environment./i

    it('should initially render the instructions', () => {
        render( <App /> )
        const  textElement = screen.getByText(instructions);

        expect(textElement).toBeVisible();
    })

    it('should no longer render the instructions when an animal image is clicked', () => {
        render( <App /> )
        const  textElement= screen.getByText(instructions);
        const  imageElement = screen.getByAltText(/camel/i);

        fireEvent.click(imageElement);
        expect(textElement.value).not.toBe(instructions);

    })

    // Facts are randomly generated but every animal fact starts with the name of that animal
    it('should give a fact about the targeted animal when it\'s image is clicked', () => {
        render( <App /> )
        const  camelImageElement = screen.getByAltText(/camel/i);
        const textElement = screen.getByTestId('text');

        fireEvent.click(camelImageElement);
        expect(textElement.textContent.split(" ")[0]).toBe('Camels');
    })

    it('should change between different animal facts when different animal images are clicked', () => {
        render( <App /> )
        const  camelImageElement = screen.getByAltText(/camel/i);
        const  dolphinImageElement = screen.getByAltText(/dolphin/i);
        const  snowLeopardImageElement = screen.getByAltText(/snowLeopard/i);
        const textElement = screen.getByTestId('text');

        fireEvent.click(camelImageElement);
        fireEvent.click(dolphinImageElement);
        expect(textElement.textContent.split(" ")[0]).toBe('Dolphins');

        fireEvent.click(snowLeopardImageElement);
        expect(textElement.textContent.split(" ")[0]).toBe('Snow');
    })
})






