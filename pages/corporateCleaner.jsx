import Image from 'next/image';
import React from 'react';
import CCHome from '../public/assets/projects/CCleanerHomepage.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={CCHome}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Corporate Cleaner</h2>
          <h3>React / Ruby </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p>
          This app was co-developed using React and Ruby Sintra. It is an employee management application that provides an 
          intuitive user interface, enabling users to effortlessly interact with the system to add, update, or remove employee 
          information in real-time. User changes made are instantly reflected in the database, and employee records can be quickly
          located using various search and filter functionalities. The application supports a "one-to-many" relationship, allowing 
          users to associate multiple employees with a single manager and multiple managers under a single supervisor. This feature 
          offers a structured view of the organizational hierarchy, enabling users to understand and visualize the reporting structure 
          within the company. The application is also built to accommodate scalability, allowing an increasing volume of data without 
          compromising performance.
          </p>
          <a
            href='https://github.com/Andy6503/corporate-cleaner'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Frontend Github</button>
          </a>
          <a
            href='https://github.com/Andy6503/Corporate-Cleaner-Backend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Backend Github</button>
          </a>
          <a
            href='https://www.youtube.com/watch?v=GlpcxJNk1Mk'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default crypto;
