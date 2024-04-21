import React from "react";

let services = [
  {
    caption: "Data Analytics",
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-device-analytics'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#40ffd1'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z' />
        <path d='M7 20l10 0' />
        <path d='M9 16l0 4' />
        <path d='M15 16l0 4' />
        <path d='M8 12l3 -3l2 2l3 -3' />
      </svg>
    ),
    text: "Our AI-driven analytics platform enables organizations to gain valuable insights from their data, empowering data-driven decision-making.",
  },
  {
    caption: "Data Mining",
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-brand-databricks'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#40ffd1'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01' />
      </svg>
    ),
    text: "We specialize in extracting, processing, and analyzing data from various sources, uncovering hidden patterns and trends.",
  },
  {
    caption: "Data Management",
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-database'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#40ffd1'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0' />
        <path d='M4 6v6a8 3 0 0 0 16 0v-6' />
        <path d='M4 12v6a8 3 0 0 0 16 0v-6' />
      </svg>
    ),
    text: "Quanta provides end-to-end data management solutions, including data storage, cleansing, and integration services.",
  },
];

const Features = () => {
  return (
    <main className='text-white/60 mt-20' id="services">
      <p className='text-primary lg:text-5xl text-2xl text-center font-bold'>
        FEATURES
      </p>

      <p className="mt-1 text-center lg:text-base text-xs">Quanta AI provides the best solutions using our key features</p>
      <section className='justify-between flex lg:flex-row flex-col mt-0 lg:mt-10'>
        {services.map((service, index) => (
          <section
            key={index}
            className='bg-gradient-to-br flex items-center from-white/20 lg:my-0 my-5 to-bg/60 rounded-lg backdrop-blur-2xl h-64 basis-[32%] p-4 border-[#363636] border-[1px]'
          >
            <div>
              {" "}
              <p className='text-white text-xl text-center'>
                {service.caption}
              </p>
              <div className='flex justify-center mt-5 '>{service.svg}</div>
              <p className='lg:text-base text-sm mt-5 text-center'>
                {service.text}
              </p>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Features;
