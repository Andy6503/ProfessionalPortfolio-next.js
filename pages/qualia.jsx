import Image from 'next/image';
import React from 'react';
import neuroImg from '../public/assets/projects/neuro.png';
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
          src={neuroImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Email Seqence for Neurohackers.com</h2>
          <h3>Spec Work</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p>
          This is an email or newsletter sequence for NeuroHacker, specifically for their product Qualia Mind.
          This email sequence is based on the user entering their email from a sales page that offered
          a free PDF guide. The goal of this newsletter is to keep the reader engaged with the seller and
          product while not being overly sales-focused. This sequence features a product launch, background
          about the seller and product, a preorder sell, hard sells, and an inactivity sequence.
          </p>
          <a
            href='https://docs.google.com/document/d/1kQeSHeGPiarhUNP9CqeIc6WllC1pel02O-4ooZyEFAQ/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Document</button>
          </a>
          <a
            href='https://neurohacker.com/shop/qualia-mind'
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

export default property;
