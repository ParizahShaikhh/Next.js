import React from 'react';



const Contact: React.FC = () => {
    return (
        <>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
            <form className=''>
                <input type='name' id='name' placeholder='Name' className=''/>
                <input type='email' id='email' placeholder='Email' className=''/>
                <textarea id='message' placeholder='Message/Feedback/Suggestions' className=''/>
                <button type='submit' id='submit' className=''>Submit</button>
            </form>
            <p className='text-lg text-center max-w-md'>
                Feel free to reach out to me at <a href='mailto:parivian6@gmail.com' className='text-blue-500 underline'>parivian6@gmail.com</a> .
            </p>
        </div>
        </>
    );
};

export default Contact;