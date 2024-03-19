import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function Feedback() {
    const formm = useRef();
    const [form, setform] = useState({ name: undefined, email: undefined, subject: undefined, message: undefined })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject:'',
        message:''
    });
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;

    // Validate form fields
    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!form.name || !form.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else {
            newErrors.name = '';
        }

        if (!form.email || !form.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        } else {
            newErrors.email = '';
        }

        if (!form.subject || !form.subject.trim()) {
            newErrors.subject = 'Subject is required';
            valid = false;
        } else {
            newErrors.subject = '';
        }

        if (!form.message || !form.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        } else {
            newErrors.message = '';
        }
           

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('subject', form.subject);
        formData.append('message', form.message);
      
        if (validateForm()) {
            console.log('Form submitted:', formData);
        } else {
            console.log('Form validation failed');
            return
        }
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

            // emailjs.send('default_service', TEMPLATE_ID, templateParams, API_KEY)
            //     .then((response) => {
            //         // console.log('Email sent successfully!', response);
            //     })
            //     .catch((error) => {
            //         console.error('Error sending email:', error);
            //     });

            setform({ name: "", email: "", subject: "", message: "" })
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
                    <form onSubmit={sendForm} ref={formm} >
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input onChange={handleOnChange} value={form.name} type="text" name="name" id="name" placeholder="Full Name" className={` ${form.name ? "border-[#e0e0e0]" : "border-red-600"} w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-400`}
                            />
                            {!form.name && <span className='text-red-600'>{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input onChange={handleOnChange} value={form.email} type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                            {!form.email && <span className='text-red-600'>{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                                Subject
                            </label>
                            <input onChange={handleOnChange} value={form.subject} type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                            {!form.subject && <span className='text-red-600'>{errors.subject}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                                Message
                            </label>
                            <textarea onChange={handleOnChange} value={form.message} rows="7" name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-400"
                            ></textarea>
                            {!form.message && <span className='text-red-600'>{errors.message}</span>}
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

