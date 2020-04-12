import React from 'react';
import { Router } from 'react-router-dom';

import createHistory from './history';
import AppRoute from './AppRoute';

export default () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <AppRoute history={history} />
    </Router>
  );
};
