import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import routers
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Compnents
import App from './App';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Navigation from './components/Navigation.js';
import Launch from './components/launch';

// Web vitals
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
    <Navigation />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/About" element={<About />} />
      <Route path = "/Contact" element={<Contact />} />
      <Route path = "/Launch" element={<Launch />} />
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
