import Image from 'next/image';
import React from 'react';
import frontpage from '../public/assets/projects/NewsOwlFrontpage.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={frontpage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>News Owl</h2>
          <h3>React / react-Bootstrap</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p>
          This app was co-developed using ReactJS and React technologies. Users are able to easily
          view and search for almost any news article. Using a public news API, the app has access to thousands of
          of articles and will automatically update with the latest news. The user is also able to create
          custom articles that will be saved on a separate page. The user is also able to "favorite" articles,
          causing them to be saved and displayed on the "favorites" page until the user removes them.
          </p>
          <a
            href='https://github.com/Andy6503/news-owl'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Github</button>
          </a>
          <a
            href='https://www.youtube.com/watch?v=JPqR4TH3tck'
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

export default property;
