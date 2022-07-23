import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Bookmark from './Pages/Bookmark';

function App() {
  return (
    <Router>
      <div className="bg-[#f3dcf7] py-[90px] h-[100vh] relative">
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
