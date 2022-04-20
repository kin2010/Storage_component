import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@emotion/react';

const App = () => {
  const routing = useRoutes(routes());
  return routing;
};
const theme = {
  colors: {
    blue: '#2d6eed',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e8b8f5',
    red: '#dc3545',
    orange: '#fec410',
    yellow: '#000',
    green: '#b0e43f',
    teal: '#20c997',
    cyan: '#49ffc3',
    white: '#fff',
    gray: '#f5f7fa',
    grayDark: '#343a40',
    primary: '#22ab59',
    secondary: '#e7faef',
    danger: '#e63e46',
    dark: '#203259',
    success: '#01a149',
    info: '#17a2b8',
    warning: '#de9100',
    light: '#f2f4f7',
    textColor: '#1b1b1b',
  },
};
const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default AppWrapper;