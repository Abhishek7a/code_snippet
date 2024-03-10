import React from 'react'

export default function Accordion2() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-md-5 px-3 bg-white min-h-sceen w-md-75 m-auto py-5 rounded">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl  tracking-tight text-center">Syllabus</h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                    <div className="p-3 bg-secondary-subtle rounded">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Foundation Course</span>
                            </summary>
                            <p className="text-neutral-600  mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn " style={{ border: "2px solid #212844" }}>
                                In the 11th and 12th grades, students pursuing the non-medical stream are provided with foundation courses that form the bedrock of their academic journey. Non-medical refers to a stream of education that focuses on subjects like Physics, Chemistry, Mathematics, and Computer Science. These foundation courses are essential in laying a strong groundwork for students to excel in these subjects and pave the way for their future careers in fields like engineering, technology, research, and more.
                            </p>
                        </details>
                    </div>

                    <div className="p-3 bg-secondary-subtle mt-2 rounded">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>JEE Mains</span>
                            </summary>
                            <p className="text-neutral-600 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn" style={{ border: "2px solid #212844" }}>
                                <ul>
                                    <li> Exam Pattern: JEE Main primarily assesses the candidates' knowledge in three subjects: Physics, Chemistry, and Mathematics. The exam is typically conducted in two shifts, and each subject is given equal weightage.
                                    </li>
                                    <li>Mode of Examination: JEE Main is conducted in both online (Computer-Based Test) and offline (Pen and Paper-Based Test) modes. However, starting from 2021, the exam is conducted in a fully computer-based format.

                                    </li>
                                    <li> Question Types: The exam consists of multiple-choice questions (MCQs) as well as numerical value-based questions, where candidates need to enter the numerical value as the answer.
                                    </li>
                                    <li> Marking Scheme: JEE Main has a specific marking scheme, where each correct answer is awarded four marks, while an incorrect answer results in a deduction of one mark. No marks are awarded or deducted for unanswered questions.

                                    </li>
                                    <li> Exam Frequency: Before 2021, JEE Main was conducted twice a year (January and April). However, starting from 2021, JEE Main is held four times a year (February, March, April, and May), giving students more opportunities to improve their scores.
                                    </li>
                                </ul>
                            </p>
                        </details>
                    </div>
                    <div className="p-3 bg-secondary-subtle mt-2 rounded">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Crash Course</span>
                            </summary>
                            <p className="text-neutral-600 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn" style={{ border: "2px solid #212844" }}>
                                A crash course, in an educational context, refers to an intensive and accelerated learning program designed to cover a substantial amount of material within a short period. These courses are typically offered for various subjects, standardized tests, or professional certifications and are often taken by students or individuals seeking quick and focused learning to achieve specific goals in a limited time.
                            </p>
                        </details>
                    </div>
                    <div className="p-3 bg-secondary-subtle  mt-2 rounded">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Dropper Batch</span>
                            </summary>
                            <p className="text-neutral-600 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn " style={{ border: "2px solid #212844" }}>
                                The term "Dropper Batch" specifically refers to a batch or group of students who have chosen to take a drop or gap year to focus solely on their exam preparation. These students typically aim to improve their scores and secure admission to top-tier colleges or universities, especially in highly competitive exams like the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical courses
                            </p>
                        </details>
                    </div>
                    <div className="p-3 bg-secondary-subtle  mt-2 rounded">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Online Testing</span>
                            </summary>
                            <p className="text-neutral-600 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn" style={{ border: "2px solid #212844" }}>
                                The PREX (Potencia's Scholarship Test) is a specially designed initiative conducted every year by Potencia Academy where students from across 9 districts of Malwa region compete against the brightest minds to showcase their talent in a competitive environment.
                                <br />
                                PREX is one of the biggest scholarship exams conducted in the Malwa region where young talent is recognized and awarded scholarships of up to 100% of their tuition fees. Students currently in Class 10th are eligible to appear for PREX 2020.
                                <br />
                                It serves as a launchpad for students to unlock their hidden potential and also prepare for their goals like IT/JEE/NEET/AIIMS by testing their various capabilities.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </>
    )
}
