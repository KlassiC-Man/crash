import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/login/Login';
import Submit from './screens/Submit/Submit';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login}  />
          <Route path='/submit' component={Submit} />
        </Switch>
      </Router>
  );
}

export default App;
