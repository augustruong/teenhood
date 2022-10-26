import React from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/main/HomePage';
import EhonPage from './pages/main/EhonPage';
import JishoPage from './pages/main/JishoPage';
import NayamiPage from './pages/main/NayamiPage';


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
          <Route path='/jisho' element={<JishoPage/>} />
          <Route path='/nayami' element={<NayamiPage/>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
