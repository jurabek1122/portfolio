import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';

const App = () => {
    return (
        <div className='container'>
           <Header /> 
           <Home />
           <Projects />
           <Contact />
        </div>
    );
};


export default App;