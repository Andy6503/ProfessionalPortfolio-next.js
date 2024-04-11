import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NewsOwlIcon from '../public/assets/projects/NewsOwlLogo.png';
import CCleanerLogo from '../public/assets/projects/CCleanerLogo.png'
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
           title='News Owl Website'
           backgroundImg={NewsOwlIcon}
           projectUrl='/newsOwl'
           tech= 'React JS'

          />

          <ProjectItem 
          title='Corporate Cleaner Website'
          backgroundImg={CCleanerLogo}
          projectUrl='/corporateCleaner'
          tech= 'React JS & Ruby'
          
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
