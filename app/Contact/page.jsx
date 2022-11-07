'use client'
import { useState } from 'react'
import * as emailjs from 'emailjs-com'
import styles from './Contact.module.css'
const Talk = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (email && message) {
            const templateParams = {
                email,
                message
            };

            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_USER_ID)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Por favor rellene todos los campos');
        }
    }
    return (
        <>
            <div >
                <h1 className={styles.title}>Vamos a hablar!💬</h1>
                <p className={styles.text}>Dejame un mensaje en el formulario a continuación o póngase en contacto a través de Discord o Twitter.</p>
                <div className="main-box" id="contact-form">
                    <label for email className="text">EMAIL</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label for message className="text">TU MENSAJE</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button onClick={submit}>Enviar</button>
                    <div className='text-ok'><span className={emailSent ? 'visible' : null}>Gracias por tu mensaje, me pondre en contacto contigo en un abrir y cerrar de ojos!</span></div>
                </div>
                <div className="social">
                    <ul>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Talk;