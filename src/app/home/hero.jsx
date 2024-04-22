"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import anim from "../../../public/ai.json";
import { animate, motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildern: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 1,
  },
};

export default function Hero() {
  return (
    <main className='text-text relative isolate ref lg:flex w-full lg:min-h-[80vh]'>
      <marquee
        className='absolute w-full h-20 z-10 font-medium text-3xl lg:text-6xl text-primary/40 top-[42%] lg:top-1/2 bottom-1/2 '
        behavior=''
        direction='left'
      >
        Empower Your Business with Quanta
      </marquee>
      <section className='lg:flex justify-between relative mt-5'>
        <div className='basis-1/5 lg:block hidden' />
        <motion.div
          variants={banner}
          className='basis-1/5 lg:absolute lg:mt-0 mt-16 h-full -z-10 flex items-end'
        >
          <AnimatedLetters title={"AI-DRIVEN-DATA-ANALYTICS"} />
        </motion.div>

        <div className='basis-2/5 flex items-center lg:my-0 my-10 justify-center'>
          <Lottie className='lg:h-3/4 h-64' animationData={anim} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
          className='basis-1/5 lg:flex flex-col items-end'
        >
          <p className=' lg:text-right lg:text-base text-sm leading-loose'>
            Where data meets destiny, Quanta pioneers the fusion of AI and
            analytics. Dive into the future of data-driven decision-making with
            our cutting-edge tools, unraveling complexities to reveal insights
            that propel your organization forward. Explore the synergy of
            innovation and intelligence at Quanta, where every datum shapes a
            brighter tomorrow.
          </p>

          <button className='mt-10 lg:mt-20 flex lg:py-4 py-3 px-6 lg:px-10 bg-primary rounded-full font-bold text-black'>
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
        </motion.div>
      </section>
    </main>
  );
}

const AnimatedLetters = ({ title }) => (
  <motion.span
    className='lg:text-7xl overflow-hidden flex text-xl lg:text-left text-center font-bold text-primary'
    variants={banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, index) => (
      <motion.span
        className='overflow-y-hidden'
        variants={letterAnimation}
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
