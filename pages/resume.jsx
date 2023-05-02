import React from 'react';
import Head from 'next/head';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Andrew | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Andrew Kapsa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/andrewkapsa/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.instagram.com/andrewkapsa1/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Digital Marketing <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>Digital Marketing</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Innovative, analytical, and motivated digital marketing professional
          with experience in customer service, client relations, team leadership, 
          frontend web development. Proven organizational effectiveness in fast-paced 
          and challenging environments. Diverse market and competitor analytical skills,
          team collaboration experience, and relationship building methods. Consummate professional and 
          motivated leader with solid interpersonal abilities and complex problem-solving skills.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span> Postman
            <span className='px-2'>|</span> RESTAPI

          </p>
          <p className='py-2'>
            <span className='font-bold'>Marketing Skills</span>
            <span className='px-2'>|</span>Copywriting
            <span className='px-2'>|</span>Strategy Development
            <span className='px-2'>|</span>Social Media Marketing
            <span className='px-2'>|</span>Email Marketing
            <span className='px-2'>|</span>Video Marketing
            <span className='px-2'>|</span>Content Creation
            <span className='px-2'>|</span>Market Research and Analysis
            <span className='px-2'>|</span>Digital Marketing tools
            <span className='px-2'>|</span>Communication
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            APISERO INC
            </span>
            <span className='px-2'>|</span>New York, NY/Online
          </p>
          <p className='py-1 italic'>MuleSoft Intern (March 2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Instructed on and successfully implemented the usage of Java programming language,
              VCS, Build tools, Jenkins, Project management, Agile basics, and basic coding skills.
            </li>
            <li>
              Instructed on and successfully implemeted the usage of Anypoint Platform to discover, design,
              build, deploy, manage, and govern APIs.
            </li>
            <li>
               Will achieve a MuleSoft Developer Certification upon completion of the Intership and course
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Copywriter and Digtial Marketing Consultant
            </span>
            <span className='px-2'>|</span>New York, NY/Online
          </p>
          <p className='py-1 italic'>Self-Employed (Septemeber 2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Thousands of hours of experience conducting and practicing market research and competitor analysis 
              to identify new opportunities and trends.
            </li>
            <li>
              Expert level experience in many forms of copy inculding email sequences, landing pages, sales funnels, 
              product pages, sales pitchs, and more. 
            </li>
            <li>
              Able to work effectively with many different areas of a business to provide the best insights 
              and most effective way to implement new strategies.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Swifto</span>
            <span className='px-2'>|</span>New York, NY
          </p>
          <p className='py-1 italic'>Private Dog Walker (November 2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Required to meet certain time windows set out by the client to walk their dog or dogs for 
              any amount of time between 20 minutes to an overnight stay.
            </li>
            <li>
              Conducted myself in a friendly and professional manner while speaking with clients about 
              their wants and needs for their pets. I always make sure to cover everything I need to know to
              provide the best care and experience for their dog or dogs.
            </li>
            <li>
              Handled countless dogs with all types of behaviors and triggers in a professional manner.
              Have recieved countless compliemets from clients on my friendly attuitude
              and my ability to handle their pet effectively and still bond with them. 
            </li>
            <li>
              Provided above and beyond service to ensure best walk for the dog or dogs everytime. Paying 
              attention to their reactions and responses, I always make sure to do what the dog enjoys most.
            </li>
            <li>
              Always made sure to conduct myself in a professional and respectful manner when entering or
              staying in a client home.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
