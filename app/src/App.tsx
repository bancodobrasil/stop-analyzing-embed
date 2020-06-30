import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ChoiceBoard from './routes/ChoiceBoard';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/">
            <ChoiceBoard />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
