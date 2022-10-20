import React from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          {/* <Route path='/about' element={<AboutPage/>} /> */}

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
