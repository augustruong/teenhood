import React from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import EhonPage from './pages/EhonPage';


import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <img src={process.env.PUBLIC_URL + '/images/texture.JPG'} className='texture'/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ehon' element={<EhonPage/>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
