"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import anim from "../../../public/ai.json";

export default function Hero() {
  return (
    <main className='text-text  ref lg:flex w-full lg:min-h-[80vh]'>
      <section className='lg:flex justify-between relative mt-5'>
        <div className='basis-1/5 -z-10 flex items-end'>
          <p className='mt-10 lg:text-7xl text-4xl lg:text-left text-center font-bold text-primary'>
            AI DRIVEN DATA ANALYTICS
          </p>
        </div>

        <div className='basis-2/5 flex items-center lg:my-0 my-10 justify-center'>
          <Lottie className='lg:h-3/4 h-64' animationData={anim} />
        </div>

        <div className='basis-1/5 lg:flex flex-col items-end'>
          <p className=' lg:text-right lg:text-base text-sm leading-loose'>
            Where data meets destiny, Quanta pioneers the fusion of AI and
            analytics. Dive into the future of data-driven decision-making with
            our cutting-edge tools, unraveling complexities to reveal insights
            that propel your organization forward. Explore the synergy of
            innovation and intelligence at Quanta, where every datum shapes a
            brighter tomorrow.
          </p>

          <button className='mt-10 flex lg:py-4 py-3 px-6 lg:px-10 bg-primary rounded-full font-bold text-black'>
            Get Started
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-arrow-right'
              className='ml-1'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#000000'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l14 0' />
              <path d='M13 18l6 -6' />
              <path d='M13 6l6 6' />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
