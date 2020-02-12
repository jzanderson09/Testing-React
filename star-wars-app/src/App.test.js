import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Tests for the rendering of the Star Wars logo, specified by the alt tag 'logo':
test('renders Star Wars logo', async () => {
    const wrapper = rtl.render(<App />);
    await wrapper.findByAltText(/logo/i);
})