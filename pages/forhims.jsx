import Image from 'next/image';
import React from 'react';
import ForhimsImg from '../public/assets/projects/forhims.png';
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
          src={ForhimsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Forhims.com Sales Page</h2>
          <h3>Spec Work</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p>
          This is a mock sales page created for ForHims, specifically their male hair loss treatment. This sales 
          page aims to take the reader on a journey, gaining their email and compelling them to purchase the product by
          offering a discount code. Through the use of pictures and vivid imagery, this sales page educates the reader on 
          the specifics of male hair loss while simultaneously making it feel personalized to the reader.
          </p>
          <a
            href='https://docs.google.com/document/d/1RYsTTqwT0a-i8Cg0nnA7B0s3NRWjsAih9rlOr35ZhFk/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Document</button>
          </a>
          <a
            href='https://www.forhims.com/hair-loss/hair-power-pack'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Product</button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default crypto;
