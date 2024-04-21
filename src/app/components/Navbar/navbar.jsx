"use client";
import React from "react";
import { Button } from "../ui/moving-border";

const Navbar = () => {
  const links = [
    { title: "Features", link: "#services" },
    { title: "Integration", link: "#integration" },
    { title: "Company", link: "#" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <navbar className='mt-5 px-5 lg:px-20 container mx-auto flex items-center justify-between h-16 text-text'>
      <section className='basis-1/5 flex items-center'>
        <p className='font-bold text-primary text-3xl'>Quanta</p>
      </section>

      <section className='basis-3/5 lg:flex hidden items-center justify-center'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className='mx-5 hover:text-white text-white/60  transition-all duration-500 ease-in-out font-medium'
          >
            {link.title}
          </a>
        ))}
      </section>

      <section className='basis-1/5 lg:flex hidden items-center justify-end'>
        {/* <Button className='px-11 py-3 font-bold'>Sign Up</Button> */}
      </section>

      {/* Mobile */}
      <section className='lg:hidden flex items-center justify-end basis-1/5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='icon icon-tabler icon-tabler-menu-deep'
          width='32'
          height='32'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='#ffffff'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6h16' />
          <path d='M7 12h13' />
          <path d='M10 18h10' />
        </svg>
      </section>
    </navbar>
  );
};

export default Navbar;
