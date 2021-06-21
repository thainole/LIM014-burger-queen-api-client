import './styles/custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Login} from './components/Login';
import {NavBar} from './components/NavBar';
import { AdminView} from './components/Admin/AdminView';
//import {Home} from './components/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/pedidos" component={NavBar} />
          <Route path="/admin" component={AdminView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
