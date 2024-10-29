import React from 'react';
import './App.css';
import Landpage from './pages/Landpage'; 
import Favourites from './pages/Favourites';
import Orders from './pages/Orders';
import History from './pages/History';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/Favourites" element={<Favourites/>}></Route>
        <Route path="/Orders" element={<Orders/>}></Route>
        <Route path="/History" element={<History/>}></Route>
      </Routes>
    </>
  );
}

export default App;
