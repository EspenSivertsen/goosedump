import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper margin-bot">
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
