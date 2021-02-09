import { PhotoViewer } from './PhotoViewer.js';
// import { renderer } from '@testing-library/react';
// const renderer = require('react-test-renderer');
import React from 'react';
import renderer from 'react-test-renderer';

describe("PhotoViewer", () => {
    it("should match snapshot with src prop", async () => {
        const tree = renderer.create(<PhotoViewer src="https://picsum.photos/id/879/600/400"/>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
