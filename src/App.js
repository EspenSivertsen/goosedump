import React from 'react';
import ScrollToTop from './hooks/ScrollToTop';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import GamePage from './components/GamePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
      <Router>
        <ScrollToTop />
        <div className="App">
          {/* <Header /> */}
          <div className="content-wrapper">
            <NavBar />
              <div className="wrapper margin-bot">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/game/:id" element={<GamePage />} />
                </Routes>
              </div>
            </div>
          <Footer />
        </div>
      </Router>
      // <div className="App">
      //   <Header />
      //   <div className="wrapper margin-bot">
      //     <Home />
      //   </div>
      //   <Footer />
      // </div>
    );
}

export default App;
