import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/user/Login.jsx';
import Home from './components/user/Home.jsx'
import "./App.css";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Login />} />
        <Route path='/home' element={< Home />} />
      </Routes>
    </>
  );
}

export default App;
