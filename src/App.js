import './App.css';
import Dispatch from './Dispatch';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Agent from './Agent';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Dispatch}/>
          <Route path="/agent/:id" exact component={Agent}/>
          <Route path="/admin/:id" exact component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
