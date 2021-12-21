import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Trade from './pages/trade';
import Pools from './pages/pools';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
        <Header />  
        <Routes>
          <Route path="./pages/trade" element={Trade} />
          <Route path="./pages/pools" exact element={Pools} />
        </Routes>

    </>
  );
}

export default App;
