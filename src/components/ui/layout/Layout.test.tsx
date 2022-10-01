import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout';

test('renders title link', () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  );
  const linkElements = screen.getAllByText(/^SantuAnimal$/);
  expect(linkElements).toHaveLength(2);
  expect(linkElements[0]).toBeInTheDocument();
  expect(linkElements[1]).toBeInTheDocument();
});
