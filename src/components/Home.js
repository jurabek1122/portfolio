import React from 'react';
import {Row, Col} from 'reactstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                    <a href='#contacts'>
                        <button className='home-button'>CONTACT ME</button>
                    </a>
                    <a href='#projects'>
                        <button className='home-button'>MY WORKS</button>
                    </a>
                </Col>
                <Col md='6'>

                </Col>
            </Row>
        </div>
    );
};

export default Home;