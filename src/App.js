import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="bg-[#f3dcf7] py-[90px] h-[100vh] relative">
      <Header />
      {/* <Landing /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
