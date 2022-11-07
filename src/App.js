import React from 'react';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/main/HomePage';
import EhonPage from './pages/main/EhonPage';
import JishoPage from './pages/main/JishoPage';
import NayamiPage from './pages/main/NayamiPage';
import CoverPage from './pages/ehon/CoverPage';

import EhonContentPage from './pages/ehon/EhonContentPage';
import EhonJishoPage from './pages/ehon/EhonJishoPage';
import EhonNayamiPage from './pages/ehon/EhonNayamiPage';

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

          <Route path='/ehon/e1_shishunki/cover' element={<CoverPage index={0}/>} />
          <Route path='/ehon/e2_gekkei/cover' element={<CoverPage index={1}/>} />

          <Route path='/ehon/e1_shishunki/content' element={<EhonContentPage index={0}/>} />
          <Route path='/ehon/e1_shishunki/jisho' element={<EhonJishoPage index={0}/>} />
          <Route path='/ehon/e1_shishunki/nayami' element={<EhonNayamiPage index={0}/>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
