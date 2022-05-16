import { Row, Col, Button } from 'reactstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Contact = () => {

    return (
        <Row id='contacts'>
            <h1>Contact</h1>
            <Col md='6'>
                <input placeholder='name' type='text' className='contactInput' />
                <input placeholder='email' type='email' className='contactInput' />
                <textarea placeholder='your message...' className='contactmessage' />
                <Button color="dark" outline className='sendBtn'>Send</Button>
            </Col>
            <Col md='6' className="contact">
                <div className='social'>
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
                <div className='contactInfo'>
                    <AlternateEmailIcon /> 
                    <p>jorabekkarimjonov89@gmail.com</p>
                    <LocalPhoneIcon /> 
                    <p>+998 90 023 26 08</p>
                </div>
            </Col>
        </Row>
    );
}

export default Contact;