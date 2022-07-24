import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from 'app/layouts/rootLayout';

export function App() {
  const a = 'test';
  return (
    <BrowserRouter basename="/">
      <RootLayout />
    </BrowserRouter>
  );
}
