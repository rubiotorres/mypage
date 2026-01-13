import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile name', () => {
  render(<App />);
  expect(screen.getAllByText(/Rubio Viana/i).length).toBeGreaterThan(0);
});

