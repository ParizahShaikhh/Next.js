import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-[#0F4C75]">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            
            <form className="flex flex-col space-y-4 w-full max-w-md ">
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    className="p-2 border border-gray-300 rounded-md bg-[#3282B8]"
                />
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className="p-2 border border-gray-300 rounded-md bg-[#3282B8]"
                />
                <textarea 
                    id="message" 
                    placeholder="Message/Feedback/Suggestions" 
                    className="p-2 border border-gray-300 rounded-md h-32 bg-[#3282B8]"
                />
                <button 
                    type="submit" 
                    id="submit" 
                    className="p-2 bg-[#bbe1fa] font-bold rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
            <p className="text-lg text-center max-w-md mt-6">
                Feel free to reach out to me at <a href="mailto:parivian6@gmail.com" className="text-blue-500 underline">parivian6@gmail.com</a>.
            </p>
        </div>
    );
};

export default Contact;
