import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import qualiaIconImg from '../public/assets/projects/qualiaIcon.jpg';
import forhimsIconImg from '../public/assets/projects/forhimsIcon.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          My Portfolio
        </p>
        <h2 className='py-4'>What I&apos;ve made</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Qualia Mind Newsletter'
            backgroundImg={qualiaIconImg}
            projectUrl='/qualia'
          />
          <ProjectItem
            title='ForHims Sales Page'
            backgroundImg={forhimsIconImg}
            projectUrl='/forhims'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
