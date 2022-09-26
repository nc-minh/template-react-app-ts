import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// Use consistent styling
import 'sanitize.css/sanitize.css';
// Initialize languages
import './locales/i18n';

// Import root app
import { App } from 'app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from 'stores';
import GolobalStyles from 'styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store} context={ReactReduxContext}>
    <React.StrictMode>
      <HelmetProvider>
        <GolobalStyles>
          <App />
        </GolobalStyles>
      </HelmetProvider>
    </React.StrictMode>
  </Provider>,
);
