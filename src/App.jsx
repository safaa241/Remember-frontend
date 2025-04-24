import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AddEventPage from './pages/AddEventPage';
import Navbar from './component/Navbar';
import CalendarPage from './pages/CalendarPage';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription';
import Profile from './pages/Profile';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/home" element={
          <>
            <Navbar />
            <HomePage />
          </>
        } />
        <Route path="/" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/add" element={<AddEventPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/events' element={<List />} /> 
        <Route path='/profil' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
