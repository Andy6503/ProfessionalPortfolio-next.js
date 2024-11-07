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
              MuleSoft Developer <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'>MuleSoft Developer</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Innovative and results-oriented MuleSoft Developer with experience in software development, specializing in API design
        and system integrations. Proven track record in utilizing Agile methodologies to deliver highly effective and creative
        solutions to business challenges. Passionate about enhancing system efficiencies and deploying scalable technology
        solutions.My extensive experience in teamwork, thriving under pressure, meeting deadlines, leadership, and expert time
        management lays the foundation for consistently delivering exceptional results
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Technial Skills</h5>
          <p className='py-2'>
            <li>
          <b>Languages:</b> Java, JavaScript, Ruby, SQL, HTML, CSS
          </li>
          <li>
          <b>Frameworks/Tools:</b> React, Next.js, Rails, Anypoint Platform, Mule 4, Anypoint Studio, Jenkins, Postman
          </li>
          <li>
          <b>Certifications:</b> MuleSoft Certified Developer - Level 1
          </li>
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
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>MuleSoft Intern (March 2023 - October 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Acquired proficieny in the usage of Java programming language,
              VCS, Build tools, Jenkins, Project management, Agile basics, and basic coding skills.
            </li>
            <li>
            Acquired in-depth knowledge of the Anypoint Platform by developing mock APIs for complex, hypothetical business scenarios, 
            simulating real-world integration challenges and enhancing problem-solving skills in API design.
            </li>
            <li>
            Worked alongside senior developers to create custom APIs for simulated business cases, 
            enhancing communication flows between software products while adhering to best practices and standards.
            </li>
            <li>
            Achieved MuleSoft Developer - Level 1 certification after completing the intensive Greenfield Training program,
             mastering scalable API development techniques that enable reliable integration solutions.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
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
          <p className='py-1 italic'>Private Dog Walker (November 2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Completed over 3,650 private dog walks, achieving a consistent 5-star rating by tailoring care to 
            each dog's needs and proactively communicating with clients to ensure their satisfaction.
            </li>
            <li>
            Improved scheduling efficiency by organizing nearby walks into clusters, reducing transit time and enabling punctual arrivals, 
            achieving 100% client satisfaction even during adverse weather.
            </li>
            <li>
            Built a trusted reputation that led to an increase in client base through word-of-mouth referrals, 
            driven by personalized service and a commitment to client satisfaction.
            </li>
            <li>
            Developed strong communication and interpersonal skills through regular interaction with clients and their pets, 
            fostering trust and loyalty.
            </li>
            <li>
             I always conduct myself in a professional and respectful manner when entering, exiting, or
             staying in a client home.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Chipotle</span>
            <span className='px-2'>|</span>El Paso, TX
          </p>
          <p className='py-1 italic'>Crew Member (May 2020 - September 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Efficiently processed over 100 daily customer transactions, ensuring a high level of 
            accuracy and personalized service to enhance customer satisfaction.
            </li>
            <li>
            Managed cash transactions and end-of-shift accounting procedures with precision, using Microsoft Excel and restaurant systems.
            </li>
            <li>
            Collaborated with the team to streamline restaurant operations, reducing order processing times by 20% during peak hours and boosting 
            overall service efficiency and customer satisfaction.
            </li>
            <li>
            Maintained a positive, level-headed, and proactive mindset during both peak hours and off-peak hours.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
