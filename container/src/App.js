import React from 'react';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <MarketingApp />
    </StylesProvider>
  );
};
