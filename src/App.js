import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Header } from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useAuth } from './contexts/AuthContext';
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn';
import Store from "./pages/Store/Store";
import UserProfile from './pages/User/UserProfile';

const App = () => {
  const v = useAuth()
  console.log(v);
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/contact" component={Contact}/>
          <PublicRoute exact path="/signin" component={SignIn}/>
          <PrivateRoute exact path="/profile" component={UserProfile}/>
        </Switch>
      </Router>
    </>  
  );
};

export default App;
