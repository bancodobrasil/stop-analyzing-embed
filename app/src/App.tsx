import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChoiceBoard from './routes/ChoiceBoard';
import LikeBoard from './routes/LikeBoard';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/likeMode">
            <LikeBoard />
          </Route>
          <Route path="/">
            <Suspense fallback="loading">
              <ChoiceBoard 
                headLine=""
              />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
