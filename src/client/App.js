import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Welcome to Home</div>} />
        <Route exact path="/home" render={() => <div>Welcome to Home</div>} />
      </Switch>
    </Router>
  );
}

export default App;
