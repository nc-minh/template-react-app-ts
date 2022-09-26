import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from 'app/layouts/rootLayout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

export function App() {
  const { i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Helmet
          defaultTitle="Template App"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Template App" />
        </Helmet>
        <RootLayout />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
