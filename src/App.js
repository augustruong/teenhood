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
import './Keyframes.css'

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
          <Route path='/ehon/e3_shasei/cover' element={<CoverPage index={2}/>} />
          <Route path='/ehon/e4_suki/cover' element={<CoverPage index={3}/>} />
          <Route path='/ehon/e5_akachan/cover' element={<CoverPage index={4}/>} />
          <Route path='/ehon/e6_hinin/cover' element={<CoverPage index={5}/>} />
          <Route path='/ehon/e7_std/cover' element={<CoverPage index={6}/>}/>

          <Route path='/ehon/e1_shishunki/content' element={<EhonContentPage index={0}/>} />
          <Route path='/ehon/e1_shishunki/jisho' element={<EhonJishoPage index={0}/>} />
          <Route path='/ehon/e1_shishunki/nayami' element={<EhonNayamiPage index={0}/>} />

          <Route path='/ehon/e2_gekkei/content' element={<EhonContentPage index={1}/>} />
          <Route path='/ehon/e2_gekkei/jisho' element={<EhonJishoPage index={1}/>} />
          <Route path='/ehon/e2_gekkei/nayami' element={<EhonNayamiPage index={1}/>} />

          <Route path='/ehon/e3_shasei/content' element={<EhonContentPage index={2}/>} />
          <Route path='/ehon/e3_shasei/jisho' element={<EhonJishoPage index={2}/>} />
          <Route path='/ehon/e3_shasei/nayami' element={<EhonNayamiPage index={2}/>} />

          <Route path='/ehon/e4_suki/content' element={<EhonContentPage index={3}/>} />
          <Route path='/ehon/e4_suki/jisho' element={<EhonJishoPage index={3}/>} />
          <Route path='/ehon/e4_suki/nayami' element={<EhonNayamiPage index={3}/>} />

          <Route path='/ehon/e5_akachan/content' element={<EhonContentPage index={4}/>} />
          <Route path='/ehon/e5_akachan/jisho' element={<EhonJishoPage index={4}/>} />
          <Route path='/ehon/e5_akachan/nayami' element={<EhonNayamiPage index={4}/>} />

          <Route path='/ehon/e6_hinin/content' element={<EhonContentPage index={5}/>} />
          <Route path='/ehon/e6_hinin/jisho' element={<EhonJishoPage index={5}/>} />
          <Route path='/ehon/e6_hinin/nayami' element={<EhonNayamiPage index={5}/>} />

          <Route path='/ehon/e7_std/content' element={<EhonContentPage index={6}/>} />
          <Route path='/ehon/e7_std/jisho' element={<EhonJishoPage index={6}/>} />
          <Route path='/ehon/e7_std/nayami' element={<EhonNayamiPage index={6}/>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
