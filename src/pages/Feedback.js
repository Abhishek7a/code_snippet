import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Feedback() {
    const [form, setform] = useState({ name: undefined, specialization: undefined, experience: undefined, resume: undefined, lastSalary: undefined })
   
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('specialization', form.specialization);
        formData.append('experience', form.experience);
        formData.append('lastSalary', form.lastSalary);
        try {
            // const res = await axios.post(API_URL, formData);
            toast.success('Thanks! for your feedback.');
            // Send Email
            const templateParams = {
                to_email: 'abhishekarora7327@gmail.com',
                message: JSON.stringify({
                    Form: "Career Form",
                    name: form.name,
                    specialization: form.specialization,
                    experience: form.experience,
                    lastSalary: form.lastSalary
                }, null, 2),
            };

            // emailjs.send('default_service', TEMPLATE_ID, templateParams, API_KEY)
            //     .then((response) => {
            //         // console.log('Email sent successfully!', response);
            //     })
            //     .catch((error) => {
            //         console.error('Error sending email:', error);
            //     });

            setform({ name: "", specialization: "", experience: "", resume: "", lastSalary: "" })
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
            <div className='text-3xl text-center text-yellow-400'>Feedback</div>
            <div className="flex items-center justify-center mt-3">
                <div className="m-auto w-3/4">
                    <form method="POST">
                        <div className="mb-3">
                            <label
                                for="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="subject"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-text-yellow-400"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="7"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-yellow-400"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form rounded-md hover:bg-yellow-500 bg-yellow-400 py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

