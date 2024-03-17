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
           I am an accomplished MuleSoft Developer with a proven track record of cultivating strong customer and client relationships. 
           My skills encompass MuleSoft API development, Anypoint Platform Development, and JavaScript programming. Through immersive 
           experiences and hands-on projects, I continuously hone my abilities. Over the past three years, I've been on an ongoing journey
           to push the boundaries of what's achievable in the digital landscape. While you may notice intermittent activity on my 
           Github profile, it belies the countless hours I invest behind the scenes, striving for excellence and an unwavering 
           commitment to enhance and expand my skill set. My extensive experience in teamwork, thriving under pressure, meeting 
           deadlines, leadership, and expert time management lays the foundation for consistently delivering exceptional results. 
           With a flexible demeanor, I adapt seamlessly to diverse environments, fostering collaboration and empowering those around
           me to thrive.
          </p>
          <p className='py-2 text-gray-600'>
          I embarked on my programming journey in September 2020, driven by a deep desire to understand technology on a fundamental level 
          to become an architect of the digital realm. Every day since, I've immersed myself in refining my skills, constructing numerous 
          projects, and challenging myself to always look for ways to refine and improve. My approach involves a dedication to hands-on experience, 
          continuous learning, and staying at the forefront of industry trends. It's not just about knowing how to write working code; it's about 
          mastering the intricacies and nuances that lead to breakthroughs and undeniable success.
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
