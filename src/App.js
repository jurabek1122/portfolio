import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Particle from './components/Particle';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='container'>
            <Particle />

            <Router>
                <Header /> 
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/portfolio' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
};


export default App;