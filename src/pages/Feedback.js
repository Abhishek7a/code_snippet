import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function Feedback() {
    const formm = useRef();
    const [form, setform] = useState({ name: undefined, email: undefined, subject: undefined, message: undefined })
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('subject', form.subject);
        formData.append('message', form.message);
        try {
            const templateParams = {
                to_email: 'codesnippett@gmail.com',
                message: JSON.stringify({
                    Form: "Feedback Form",
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message
                }, null, 2),
            };
            toast.success('Thanks! for your feedback.');

            emailjs.send('default_service', TEMPLATE_ID, templateParams, API_KEY)
                .then((response) => {
                    // console.log('Email sent successfully!', response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });

            setform({ name: "", email: "", subject: "",  message: "" })
        } catch (error) {
            toast.error(error.response.data.error);
        }
    }
    const handleOnChange = (e) => {
        setform({ ...form, [e.target.id]: e.target.value });
    }
    const sendForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='mt-28'>
            <div className='text-3xl text-center text-red-600'>Feedback</div>
            <div className="flex items-center justify-center mt-3">
                <div className="m-auto w-3/4">
                    <form  onSubmit={sendForm} ref={formm} >
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input onChange={handleOnChange} value={form.name} type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input onChange={handleOnChange} value={form.email} type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                                Subject
                            </label>
                            <input onChange={handleOnChange} value={form.subject} type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                                Message
                            </label>
                            <textarea onChange={handleOnChange} value={form.message} rows="7" name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-400"
                            ></textarea>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="hover:shadow-form rounded-md hover:bg-red-700 bg-red-600 py-3 px-8 text-base font-semibold text-gray-100 outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

