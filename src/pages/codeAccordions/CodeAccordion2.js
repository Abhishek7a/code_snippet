import React, { useEffect, useState, useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import accordion2 from '../../Components/accordions/Accordion2';

export default function CodeAccordion2() {
    const codeRef = useRef(null);
    const { globalVariable, dark } = useAppContext();

    useEffect(() => {
        Prism.highlightAll();
        const clipboard = new ClipboardJS('.clipboard-btn', {
            target: function () {
                return codeRef.current;
            }
        });
        clipboard.on('success', function (e) {
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Error copying text to clipboard:', e.action);
        });
        return () => {
            clipboard.destroy();
        };

    }, [globalVariable, dark]);

    const Accordion2 = ClipBoard(accordion2);
    return (
        <div className='w-11/12 m-auto'>
            <Accordion2 />
            <pre className='mt-0'>
                <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                    `<div class="mx-auto md:px-5 px-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 min-h-sceen md:w-75 m-auto py-5 rounded">
 <div class="flex flex-col items-center">
  <h2 class="font-bold text-5xl tracking-tight text-center">Syllabus</h2>
 </div>
 <div class="grid divide-y divide-gray-200 max-w-xl mx-auto mt-8">
  <div class="p-3 bg-gray-200 dark:bg-gray-800 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Foundation Course</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn  border-gray-900 dark:border-gray-100 border-2">
        In the 11th and 12th grades, students pursuing the non-medical stream are provided with foundation courses that form the bedrock of their academic journey. Non-medical refers to a stream of education that focuses on subjects like Physics, Chemistry, Mathematics, and Computer Science. These foundation courses are essential in laying a strong groundwork for students to excel in these subjects and pave the way for their future careers in fields like engineering, technology, research, and more.
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span>JEE Mains</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
        <ul>
          <li> Exam Pattern: JEE Main primarily assesses the candidates' knowledge in three subjects: Physics, Chemistry, and Mathematics. The exam is typically conducted in two shifts, and each subject is given equal weightage.
          </li>

          <li> Question Types: The exam consists of multiple-choice questions (MCQs) as well as numerical value-based questions, where candidates need to enter the numerical value.
          </li>

          <li> Exam Frequency: Before 2021, JEE Main was conducted twice a year (January and April). However, starting from 2021, JEE Main is held four times a year (February, March, April, and May), giving students more opportunities to improve their scores.
          </li>
        </ul>
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Crash Course</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
        A crash course, in an educational context, refers to an intensive and accelerated learning program designed to cover a substantial amount of material within a short period. These courses are typically offered for various subjects, standardized tests, or professional certifications and are often taken by students or individuals seeking quick and focused learning to achieve specific goals in a limited time.
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Dropper Batch</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn  border-gray-900 dark:border-gray-100 border-2">
        The term "Dropper Batch" specifically refers to a batch or group of students who have chosen to take a drop or gap year to focus solely on their exam preparation. These students typically aim to improve their scores and secure admission to top-tier colleges or universities, especially in highly competitive exams like the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical courses
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-200 dark:bg-gray-800  mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Online Testing</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
        The PREX (Potencia's Scholarship Test) is a specially designed initiative conducted every year by Potencia Academy where students from across 9 districts of Malwa region compete against the brightest minds to showcase their talent in a competitive environment.
        <br />
        PREX is one of the biggest scholarship exams conducted in the Malwa region where young talent is recognized and awarded scholarships of up to 100% of their tuition fees. Students currently in Class 10th are eligible to appear for PREX 2020.
        <br />
        It serves as a launchpad for students to unlock their hidden potential and also prepare for their goals like IT/JEE/NEET/AIIMS by testing their various capabilities.
      </p>
    </details>
  </div>
 </div>
</div>` : dark === false && globalVariable === 'React' ?
                        `<div className="mx-auto md:px-5 px-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 min-h-sceen md:w-75 m-auto py-5 rounded">
 <div className="flex flex-col items-center">
    <h2 className="font-bold text-5xl tracking-tight text-center">Syllabus</h2>
 </div>
 <div className="grid divide-y divide-gray-200 max-w-xl mx-auto mt-8">
    <div className="p-3 bg-gray-200 dark:bg-gray-800 rounded">
        <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Foundation Course</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
                In the 11th and 12th grades, students pursuing the non-medical stream are provided with foundation courses that form the bedrock of their academic journey. Non-medical refers to a stream of education that focuses on subjects like Physics, Chemistry, Mathematics, and Computer Science. These foundation courses are essential in laying a strong groundwork for students to excel in these subjects and pave the way for their future careers in fields like engineering, technology, research, and more.
            </p>
        </details>
    </div>
    <div className="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
        <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>JEE Mains</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
                <ul>
                    <li> Exam Pattern: JEE Main primarily assesses the candidates' knowledge in three subjects: Physics, Chemistry, and Mathematics. The exam is typically conducted in two shifts, and each subject is given equal weightage.
                    </li>

                    <li> Question Types: The exam consists of multiple-choice questions (MCQs) as well as numerical value-based questions, where candidates need to enter the numerical value.
                    </li>

                    <li> Exam Frequency: Before 2021, JEE Main was conducted twice a year (January and April). However, starting from 2021, JEE Main is held four times a year (February, March, April, and May), giving students more opportunities to improve their scores.
                    </li>
                </ul>
            </p>
        </details>
    </div>
    <div className="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
        <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Crash Course</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
                A crash course, in an educational context, refers to an intensive and accelerated learning program designed to cover a substantial amount of material within a short period. These courses are typically offered for various subjects, standardized tests, or professional certifications and are often taken by students or individuals seeking quick and focused learning to achieve specific goals in a limited time.
            </p>
        </details>
    </div>
    <div className="p-3 bg-gray-200 dark:bg-gray-800 mt-2 rounded">
        <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Dropper Batch</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn  border-gray-900 dark:border-gray-100 border-2">
                The term "Dropper Batch" specifically refers to a batch or group of students who have chosen to take a drop or gap year to focus solely on their exam preparation. These students typically aim to improve their scores and secure admission to top-tier colleges or universities, especially in highly competitive exams like the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical courses
            </p>
        </details>
    </div>
    <div className="p-3 bg-gray-200 dark:bg-gray-800  mt-2 rounded">
        <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Online Testing</span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-900 dark:border-gray-100 border-2">
                The PREX (Potencia's Scholarship Test) is a specially designed initiative conducted every year by Potencia Academy where students from across 9 districts of Malwa region compete against the brightest minds to showcase their talent in a competitive environment.
                <br />
                PREX is one of the biggest scholarship exams conducted in the Malwa region where young talent is recognized and awarded scholarships of up to 100% of their tuition fees. Students currently in Class 10th are eligible to appear for PREX 2020.
                <br />
                It serves as a launchpad for students to unlock their hidden potential and also prepare for their goals like IT/JEE/NEET/AIIMS by testing their various capabilities.
            </p>
        </details>
    </div>
 </div>
</div>`: dark === true && globalVariable === 'HTML' ?
                            `<div class="mx-auto md:px-5 px-3 bg-gray-900 text-gray-50 min-h-sceen md:w-75 m-auto py-5 rounded">
 <div class="flex flex-col items-center">
  <h2 class="font-bold text-5xl tracking-tight text-center">Syllabus</h2>
 </div>
 <div class="grid divide-y divide-gray-200 max-w-xl mx-auto mt-8">
  <div class="p-3 bg-gray-800 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Foundation Course</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        In the 11th and 12th grades, students pursuing the non-medical stream are provided with foundation courses that form the bedrock of their academic journey. Non-medical refers to a stream of education that focuses on subjects like Physics, Chemistry, Mathematics, and Computer Science. These foundation courses are essential in laying a strong groundwork for students to excel in these subjects and pave the way for their future careers in fields like engineering, technology, research, and more.
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span>JEE Mains</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        <ul>
          <li> Exam Pattern: JEE Main primarily assesses the candidates' knowledge in three subjects: Physics, Chemistry, and Mathematics. The exam is typically conducted in two shifts, and each subject is given equal weightage.
          </li>

          <li> Question Types: The exam consists of multiple-choice questions (MCQs) as well as numerical value-based questions, where candidates need to enter the numerical value.
          </li>

          <li> Exam Frequency: Before 2021, JEE Main was conducted twice a year (January and April). However, starting from 2021, JEE Main is held four times a year (February, March, April, and May), giving students more opportunities to improve their scores.
          </li>
        </ul>
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Crash Course</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        A crash course, in an educational context, refers to an intensive and accelerated learning program designed to cover a substantial amount of material within a short period. These courses are typically offered for various subjects, standardized tests, or professional certifications and are often taken by students or individuals seeking quick and focused learning to achieve specific goals in a limited time.
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Dropper Batch</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn  border-gray-100 border-2">
        The term "Dropper Batch" specifically refers to a batch or group of students who have chosen to take a drop or gap year to focus solely on their exam preparation. These students typically aim to improve their scores and secure admission to top-tier colleges or universities, especially in highly competitive exams like the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical courses
      </p>
    </details>
  </div>
  <div class="p-3 bg-gray-800 mt-2 rounded">
    <details class="group">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Online Testing</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p class="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        The PREX (Potencia's Scholarship Test) is a specially designed initiative conducted every year by Potencia Academy where students from across 9 districts of Malwa region compete against the brightest minds to showcase their talent in a competitive environment.
        <br />
        PREX is one of the biggest scholarship exams conducted in the Malwa region where young talent is recognized and awarded scholarships of up to 100% of their tuition fees. Students currently in Class 10th are eligible to appear for PREX 2020.
        <br />
        It serves as a launchpad for students to unlock their hidden potential and also prepare for their goals like IT/JEE/NEET/AIIMS by testing their various capabilities.
      </p>
    </details>
  </div>
 </div>
</div>` :
                            `<div className="mx-auto md:px-5 px-3 bg-gray-900 text-gray-50 min-h-sceen md:w-75 m-auto py-5 rounded">
 <div className="flex flex-col items-center">
  <h2 className="font-bold text-5xl tracking-tight text-center">Syllabus</h2>
 </div>
 <div className="grid divide-y divide-gray-200 max-w-xl mx-auto mt-8">
  <div className="p-3 bg-gray-800 rounded">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Foundation Course</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        In the 11th and 12th grades, students pursuing the non-medical stream are provided with foundation courses that form the bedrock of their academic journey. Non-medical refers to a stream of education that focuses on subjects like Physics, Chemistry, Mathematics, and Computer Science. These foundation courses are essential in laying a strong groundwork for students to excel in these subjects and pave the way for their future careers in fields like engineering, technology, research, and more.
      </p>
    </details>
  </div>
  <div className="p-3 bg-gray-800 mt-2 rounded">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span>JEE Mains</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        <ul>
          <li> Exam Pattern: JEE Main primarily assesses the candidates' knowledge in three subjects: Physics, Chemistry, and Mathematics. The exam is typically conducted in two shifts, and each subject is given equal weightage.
          </li>

          <li> Question Types: The exam consists of multiple-choice questions (MCQs) as well as numerical value-based questions, where candidates need to enter the numerical value.
          </li>

          <li> Exam Frequency: Before 2021, JEE Main was conducted twice a year (January and April). However, starting from 2021, JEE Main is held four times a year (February, March, April, and May), giving students more opportunities to improve their scores.
          </li>
        </ul>
      </p>
    </details>
  </div>
  <div className="p-3 bg-gray-800 mt-2 rounded">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Crash Course</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        A crash course, in an educational context, refers to an intensive and accelerated learning program designed to cover a substantial amount of material within a short period. These courses are typically offered for various subjects, standardized tests, or professional certifications and are often taken by students or individuals seeking quick and focused learning to achieve specific goals in a limited time.
      </p>
    </details>
  </div>
  <div className="p-3 bg-gray-800 mt-2 rounded">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Dropper Batch</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn  border-gray-100 border-2">
        The term "Dropper Batch" specifically refers to a batch or group of students who have chosen to take a drop or gap year to focus solely on their exam preparation. These students typically aim to improve their scores and secure admission to top-tier colleges or universities, especially in highly competitive exams like the Joint Entrance Examination (JEE) for engineering or the National Eligibility cum Entrance Test (NEET) for medical courses
      </p>
    </details>
  </div>
  <div className="p-3 bg-gray-800  mt-2 rounded">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span> Online Testing</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-gray-400 mt-3 px-md-4 px-2 py-3 rounded group-open:animate-fadeIn border-gray-100 border-2">
        The PREX (Potencia's Scholarship Test) is a specially designed initiative conducted every year by Potencia Academy where students from across 9 districts of Malwa region compete against the brightest minds to showcase their talent in a competitive environment.
        <br />
        PREX is one of the biggest scholarship exams conducted in the Malwa region where young talent is recognized and awarded scholarships of up to 100% of their tuition fees. Students currently in Class 10th are eligible to appear for PREX 2020.
        <br />
        It serves as a launchpad for students to unlock their hidden potential and also prepare for their goals like IT/JEE/NEET/AIIMS by testing their various capabilities.
      </p>
    </details>
  </div>
 </div>
</div>`}
                </code >
            </pre >
        </div>
    )
}


