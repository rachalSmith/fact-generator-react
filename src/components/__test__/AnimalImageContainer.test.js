import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AnimalImageContainer from "../AnimalImageContainer";



it('should render an image as a prop', async () => {
    render(<AnimalImageContainer test={"hello"}/>)
    const  imageElement = screen.getByText(/hello/i);
    expect(imageElement).toBeVisible()
})