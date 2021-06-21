import './styles/custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Login} from './components/Login';
import {ServerView} from './components/Server/ServerView';
import { ChefView } from './components/Chef/ChefView';
import { AdminView} from './components/Admin/AdminView';
//import {Home} from './components/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mesero" component={ServerView} />
          <Route exact path="/chef" component={ChefView} />
          <Route exact path="/admin" component={AdminView} />
          {/* <Route path="/home" component={Home}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
