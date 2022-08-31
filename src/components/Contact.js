import { useRef } from 'react';
import { Row, Col, Button } from 'reactstrap';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ty19aqo', 'template_3thnz4g', form.current, 'SSLusv81aIPaGwmuF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <Row id='contacts'>
            <h1>Contact</h1>
            <Col md='6'>
                <form ref={form} onSubmit={sendEmail}>
                <input placeholder='name' type='text' className='contactInput' name='user_name' required />
                <input placeholder='email' type='email' className='contactInput' name='user_email' required />
                <textarea placeholder='your message...' className='contactmessage' name='message' />
                <Button color="dark" outline className='sendBtn' type='submit'>Send</Button>
                </form>
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