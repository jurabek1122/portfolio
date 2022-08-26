import React from 'react';
import {Row, Col} from 'reactstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import sass from '../images/sass.svg';
import bootstrap from '../images/bootstrap.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import firebase from '../images/firebase.svg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <Row className='home' id='home'>
                <Col md='6'>
                    <h4 className='home-text'>HEY THERE !</h4>
                    <h2 className='name-text'>I AM KARIMJONOV JURABEK</h2>
                    <h4 className='home-text'>FRONTEND DEVELOPER</h4>
                    <div className='icons'>
                    <a href='https://t.me/Jurabek1122' target='_blanck'>
                        <TelegramIcon className='icon' />
                    </a>
                    <a href='https://www.instagram.com/karimjonov.99' target='_blanck'>
                        <InstagramIcon className='icon' />
                    </a>
                    <a href='https://github.com/jurabek1122' target='_blanck'>
                        <GitHubIcon className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/jorabek-karimjonov-75401223b' target='_blanck'>
                        <LinkedInIcon className='icon' />
                    </a>
                    </div>
                    <a href='CV Karimjonov Jo`rabek.pdf'
                       download='CV Karimjonov Jo`rabek.pdf'
                    >
                        <button className='home-button'>DOWNLOAD CV</button>
                    </a>
                    <Link to='portfolio'>
                        <button className='home-button'>MY WORKS</button>
                    </Link>
                </Col>
                <Col md='6' >
                    <h3>About me</h3>                    
                    <span className='info'>
                        HEY THERE! My name is Karimjonov Jo`rabek. I was born on 26 August, 1999.
                        I live in Akhangaran district of Tashkent region of the Republic of Uzbekistan.
                        I`m Frontend Developer.
                    </span>
                    <h3 className='skills'>Skills</h3>                    
                    <div className='skill-images'>
                        <img src={html} alt='html' />
                        <img src={css} alt='css' />
                        <img src={sass} alt='sass' />
                        <img src={bootstrap} alt='bootstrap' />
                        <img src={javascript} alt='javascript' />
                        <img src={react} alt='react' />
                        <img src={firebase} alt='firebase' />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;