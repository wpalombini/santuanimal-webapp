import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';
import AppRoutes from 'containers/routes';
import { setupStore } from 'store';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'lib/utils';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 5,
      },
    },
  },
  palette: {
    background: {
      default: '#f5f5f5',
    },
  },
});

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
