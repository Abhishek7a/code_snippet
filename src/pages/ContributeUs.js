import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function ContributeUs() {
    const formm = useRef();
    const [form, setform] = useState({ name: undefined, email: undefined, code: undefined })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        code: '',
    });
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;

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

        if (!form.code || !form.code.trim()) {
            newErrors.code = 'Subject is required';
            valid = false;
        } else {
            newErrors.code = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('code', form.code);
        if (validateForm()) {
            // console.log('Form submitted:', formData);
        } else {
            console.log('Form validation failed');
            return
        }
        try {
            const templateParams = {
                to_email: 'codesnippett@gmail.com',
                message: JSON.stringify({
                    Form: "Contribution Form",
                    name: form.name,
                    email: form.email,
                    code: form.code
                }, null, 2),
            };

            emailjs.send('default_service', TEMPLATE_ID, templateParams, API_KEY)
                .then((response) => {
                    // console.log('Email sent successfully!', response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });

            setform({ name: "", email: "", code: "" })
            toast.success('Thankyou for your support and help us to grow our community.');

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
            <div className='text-3xl text-center text-blue-800'>Contribite Us</div>
            <p className='text-center text-gray-800 mt-3 w-3/4 m-auto'>Welcome to our website! We're thrilled to offer you free access to our code templates or componenets. Want to contribute to our growing community? Your contributions are invaluable to our community. Simply paste your code snippets here.</p>
            <div className="flex items-center justify-center mt-3">
                <div className="m-auto w-3/4">
                    <form onSubmit={sendForm} ref={formm} >
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input onChange={handleOnChange} value={form.name} type="text" name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                              {errors.name && <span className='text-red-600'>{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input onChange={handleOnChange} value={form.email} type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                               {errors.email && <span className='text-red-600'>{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="code" className="mb-3 block text-base font-medium text-[#07074D]">
                                Code
                            </label>
                            <textarea onChange={handleOnChange} value={form.code} rows="7" name="code" id="code" placeholder="Paste your code here" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-400"
                            ></textarea>
                             {errors.code && <span className='text-red-600'>{errors.code}</span>}
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="hover:shadow-form rounded-md hover:bg-blue-700 bg-blue-800 py-3 px-8 text-base font-semibold text-gray-100 outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
