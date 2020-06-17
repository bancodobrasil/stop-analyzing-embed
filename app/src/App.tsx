import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Index from './routes/Index';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/:mode" children={<Mode />} />
          <Route path="/" children={<Mode />} />
        </Switch>
      </Router>
    </main>
  );
}

function Mode() {

  let { mode = ''} = useParams();

  return (
    <Index
      mode={mode}
    />
  )

}

export default App;
