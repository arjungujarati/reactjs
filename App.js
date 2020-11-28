import React from 'react';
import './App.css';
import About from './about';
import Nav from './nav';
import {BrowserRouter as Router,Route}from'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>FIRST REACT JS </h1>
      <Link to="/nav">
      <li>nav</li>
      </Link>

      <Link to="/about"> 
      <li>about</li>
      </Link>


       <Route path="/about" component={About}/>
       <Route path="/nav" component={Nav}/>       
    </div>
    </Router>
  );
}
export default App;
