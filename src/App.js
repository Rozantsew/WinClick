import './App.css';
// import { Switch, Route } from "react-router-dom";
import { Switch ,Route } from 'react-router-dom';
import Theme from "./assets/styles/Theme"
import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Theme>
      <Navbar />

        {/* <Switch> */}
          {/* <Route /> */}
        {/* </Switch> */}
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
