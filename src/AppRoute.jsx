import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './layout';
import HomePage from './home-page';
import ArticlePage from './article-page';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/article/:slug" component={ArticlePage} />
      </Switch>
    </Layout>
  );
};

export default App;
