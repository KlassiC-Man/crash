import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/login/Login';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
