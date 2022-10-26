import React from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/main/HomePage';
import EhonPage from './pages/main/EhonPage';
import JishoPage from './pages/main/JishoPage';
import NayamiPage from './pages/main/NayamiPage';
import CoverPage from './pages/lessons/CoverPage';


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

          <Route path='/ehon/cover/01_shishunki' element={<CoverPage index={0}/>} />
          <Route path='/ehon/cover/02_gekkei' element={<CoverPage index={1}/>} />


        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
