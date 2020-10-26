import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders Home link', async () => {
  render(<App />);
  await waitFor(() => {
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument()
  })
});