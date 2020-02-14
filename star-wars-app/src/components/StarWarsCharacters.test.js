import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarWarsCharacters from './StarWarsCharacters';
import axios from 'axios';

jest.mock('axios');

// Need to test for API call:
describe('axios call', () => {
    it('fetches character data from API', async () => {
        const data = {
            count: 100,
            next: '',
            previous: null,
            results: []
        };
    })
})

// Snapshot testing for StarWarsCharacters component:
it('renders correctly', () => {
    const tree = createRenderer
      .create(<StarWarsCharacters />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });