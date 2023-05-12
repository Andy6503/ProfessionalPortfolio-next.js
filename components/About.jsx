import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a very passionate digital marketing expert and front-end developer. I bring unexpected marketing strategies to 
          not just give you results but to give your business a new breath of life. I am all about learning new skills, and I 
          always work hard to improve myself in all aspects. I am also very proficient in building front-end applications using 
          HTML, CSS, Javascript, React, and many other technologies. I use this knowledge to not only develop web applications but 
          also to offer a superior approach to implementing online marketing strategies. I am a quick learner and can pick up new 
          skills and important knowledge whenever necessary. I believe that being a digital marketing expert is not just about 
          providing a sales page or an email, but about working with others to achieve greatness.
          </p>
          <p className='py-2 text-gray-600'>
          I started digital marketing in September 2022. I have been honing my craft 
          day-in and day-out. I know and practice everything, from emails to video scripts, 
          and I will not give you my work until I can bet my life that it will achieve results. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest work.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
