import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Layout from './layout/layout';

const App = () => (
  <Router>
    <Layout>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
    </Layout>
  </Router>
);
 
export default App;