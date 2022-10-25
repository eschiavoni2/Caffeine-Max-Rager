import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Tracker from './pages/Tracker';
import Nav from './components/Nav';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container-fluid App'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tracker" element={<Tracker/>} />
          </Routes>
      </div>
    </Router>
  );
}
export default App;