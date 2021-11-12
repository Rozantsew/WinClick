import './App.css';
// import { Switch, Route } from "react-router-dom";
import { Switch ,Route } from 'react-router-dom';
import Theme from "./assets/styles/Theme"
import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar/Navbar"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <div className="App">
      <Theme>
      <Navbar />
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
