import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ChoiceBoard from './routes/ChoiceBoard';
import LikeBoard from './routes/LikeBoard';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/likeMode">
            <Suspense fallback="loading">
              <LikeBoard />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback="loading">
              <ChoiceBoard />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
