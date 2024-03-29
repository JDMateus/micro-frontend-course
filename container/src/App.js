import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <>
      <h1>Hi from the container</h1>
      <p>This is a change from the container-dev branch</p>
      <hr />
      <MarketingApp />
    </>
  );
};
