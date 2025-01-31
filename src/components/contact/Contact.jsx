import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="contact section" id="contact">
                <h2 className='section__title'>Contact</h2>
                <span className='section__subtitle'>Get in touch</span>

                <div className="contact__container container">
                    <div className="contact__info">
                        <p className="contact__name">Email : </p>
                        <p className="contact__email">harshshah123346@gmail.com</p>
                    </div>

                    <div className="contact__info">
                        <p className="contact__name">Phone Number : </p>
                        <p className="contact__email">+91 7016340637</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;