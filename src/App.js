import React from 'react';
import ScrollToTop from './hooks/ScrollToTop';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';
import GamesPage from './pages/GameListPage';
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
          <NavBar />
          <div className="content-wrapper">
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/games' element={<GamesPage />} />
                  {/* <Route path="/prototypes" element={<Prototypes />} /> */}
                  <Route path="/games/:id" element={<GamePage />} />
                </Routes>
              </div>
            </div>
          <Footer />
        </div>
      </Router>
    );
}

export default App;