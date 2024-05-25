import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const email = form.current.user_email.value.trim();

        if (!email) {
            alert("Please fill in your email address first.");
            return;
        }

        emailjs.sendForm('service_bgbk0e2', 'template_py4lfxf', form.current, 'xMTp-gnDhA8cnNChP')
            .then((result) => {
                console.log(result.text);
                alert("Message sent!");
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail} style={{ borderRadius: "4px" }}>
                    <input type="email" name="user_email" placeholder='Enter your email address' />
                    <button
                        className="btn btn-j"
                        style={{ backgroundColor: "var(--orange)", borderRadius: "4px" }}
                    >
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;
