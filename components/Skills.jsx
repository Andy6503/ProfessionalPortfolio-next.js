import Image from 'next/image';
import React from 'react';
import VidMark from '../public/assets/skills/videoMarketing.png';
import Copy from '../public/assets/skills/copywriting.png';
import EmMark from '../public/assets/skills/emailMarketing.png';
import MarkRe from '../public/assets/skills/marketResearch.png';
import MarkAn from '../public/assets/skills/marketAnalysis.png';
import StratDev from '../public/assets/skills/strategyDevelopment.png';
import Consult from '../public/assets/skills/consulting.png';
import SocialM from '../public/assets/skills/socialMedia.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={VidMark} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Video Marketing</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={EmMark} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Email Marketing</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={SocialM} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Social Media Marketing</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Copy} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Copywriting</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MarkRe} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Market Research</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MarkAn} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Market Analysis</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={StratDev} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Strategy Development</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Consult} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Consulting & Collaboration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
