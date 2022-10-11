import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import { Provider } from 'react-redux';
import { setupStore } from 'store';

test('renders title link', () => {
  const store = setupStore();

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>,
  );
  const linkElements = screen.getAllByText(/^SantuAnimal$/);
  expect(linkElements).toHaveLength(2);
  expect(linkElements[0]).toBeInTheDocument();
  expect(linkElements[1]).toBeInTheDocument();
});
