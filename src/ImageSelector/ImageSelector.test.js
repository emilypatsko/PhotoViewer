import { fireEvent, render, waitFor } from "@testing-library/react";
import { ImageSelector } from './ImageSelector.js';
import { getImageUrls } from '../App.js';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';

describe ("Image Selector", () => {

    it("should display 12 images and highlight the first one by default", async () => {
        const urls = getImageUrls();
        const component = render(<ImageSelector urls = {urls} currentImg = {0} />);

        await waitFor(() => {
            const images = component.getAllByRole("img");
            const image0 = component.getByAltText("img-0");

            expect(images.length).toBe(12);
            expect(image0.className).toBe("selected-img");
        });
    });

    it("should change state to be the number of the clicked image", async () => {
        // Arrange
        const urls = getImageUrls();

        // Create mock state hook
        const setCurrentImg = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation((currentImg) => [currentImg, setCurrentImg]);

        const component = render(<ImageSelector urls = {urls} currentImg = {0} setCurrentImg = {setCurrentImg} />);

        // Act - click on image 4
        fireEvent.click(component.getByAltText("img-4"));

        // Assert
        expect(setCurrentImg).toHaveBeenCalledWith(4);
    });

    it("should highlight the currently selected image and no others", async () => {
        // Arrange - render an ImageSelector with the 4th image selected
        const urls = getImageUrls();
        const setCurrentImg = jest.fn(); // mock setState function
        const component = render(<ImageSelector urls = {urls} currentImg = {3} setCurrentImg = {setCurrentImg} />);

        // Check that the 4th image has class "selected-img" and none of the others do
        await waitFor(() => {
            const img = component.getByAltText("img-3");
            expect(img.className).toBe("selected-img");
            for (let i = 0; i < urls.length; i++) {
                if (i == 3) { continue; }
                let tempImg = component.getByAltText(`img-${i}`);
                expect(tempImg.className).toBe("");
            }
        });       
      
        // tidy up
        jest.clearAllMocks();
    });
});