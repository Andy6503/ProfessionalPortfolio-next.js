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
          I am a results-driven digital marketing expert and experienced front-end developer who specializes in breathing new life 
          into businesses. With a deep understanding of technologies such as HTML, CSS, Javascript, React, and more, I develop dynamic 
          web applications and use this knowledge to offer a superior approach to implementing online marketing strategies. I thrive on 
          collaboration, working hand-in-hand with clients to achieve remarkable success. I believe the mark of a true digital marketing 
          expert is their ability to deliver tailored solutions that truly compel the reader to take action. Let's create greatness together.
          </p>
          <p className='py-2 text-gray-600'>
          I embarked on my digital marketing journey in September 2022, driven by a deep desire to help you, someone who brings genuine 
          value through their business, find your audience. Every day since, I've immersed myself in refining my skills, crafting compelling 
          emails, and creating captivating video scripts that command attention. I seek to improve and hone my craft through hands-on experience, 
          continuous learning, and staying at the forefront of industry trends. It's not just about knowing digital marketing; it's about 
          understanding the intricacies and nuances that lead to undeniable success. I hold myself to the highest standards and won't deliver 
          my work until I'm confident enough to stake my life on its ability to generate results for you.
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
