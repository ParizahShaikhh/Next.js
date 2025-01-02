import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id='contact-div'>
            <h1 id='contact-h'>Contact Me</h1>
            
            <form id='contact-form'>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                />
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email"
                />
                <textarea 
                    id="message" 
                    placeholder="Message/Feedback/Suggestions" 
                />
                <button 
                    type="submit" 
                    id="contact-submit"
                >
                    Submit
                </button>
            </form>
            <p id='contact-p'>
                Feel free to reach out to me at <a href="mailto:parivian6@gmail.com" id='mail-a'>parivian6@gmail.com</a>.
            </p>
        </div>
    );
};

export default Contact;
