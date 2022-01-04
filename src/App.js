
import './App.css';
import AboutMe from './components/AboutFrances';
import ContactUs from './components/ContactMe';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  render(){
    return (
      <div className="App">
        <li>
          <Link to="AboutFrances">AboutMe</Link>
        </li>
        <li>
          <Link to="ContactMe">ContactUs</Link>
        </li>


        <Routes>
          <Route path="AboutFrances" element={ <AboutMe/>}/>
          <Route path="ContactMe" element={ <ContactUs/>}/>
        </Routes>
      </div>
    );
  }

}

export default App;
