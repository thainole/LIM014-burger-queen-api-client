import './styles/custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Login} from './components/Login';
import {OrdersNavBar} from './components/Orders/OrdersNavBar';
import {AdminNavBar} from './components/Admin/AdminNavBar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/pedidos" component={OrdersNavBar} />
          <Route path="/admin" component={AdminNavBar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
