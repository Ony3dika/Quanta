"use client";
import React from "react";
import Image from "next/image";
import phone from "../../../public/phone.json";
import data from "../../../public/data.json";
import Lottie from "lottie-react";

let steps = [
  {
    title: "Assessment and Planning",
    body: "Our team begins by conducting a comprehensive assessment of your current data infrastructure, analytics capabilities, and business objectives. Based on our assessment, we work closely with you to develop a customized integration plan that aligns with your goals and requirements.",
    pic: phone,
  },

  {
    title: "Data Onboarding",
    body: "Next, we work to onboard your data onto our platform. This may involve extracting data from various sources, such as databases, applications, and external APIs. Our data experts ensure that your data is cleansed, normalized, and structured for analysis, ensuring accuracy and reliability.",
    pic: data,
  },

  {
    title: "Customization and Configuration",
    body: "Once your data is onboarded, we customize and configure our analytics platform to meet your specific needs. This may involve creating custom dashboards, reports, and data visualizations tailored to your business objectives and key performance indicators (KPIs).",
    pic: phone,
  },

  {
    title: "Integration with Existing Systems",
    body: "Quanta's solutions seamlessly integrate with your existing systems and workflows, including CRMs, ERPs, and other business applications. Our team works closely with your IT department to ensure a smooth integration process, minimizing disruption to your day-to-day operations..",
    pic: phone,
  },

  {
    title: "Continuous Optimization",
    body: "As your business evolves, so do your data analytics needs. We continuously monitor and optimize our solutions to ensure they remain aligned with your changing requirements. Our data experts provide regular insights and recommendations to help you maximize the value of your data assets and drive business growth.",
    pic: phone,
  },
];

const Integration = () => {
  return (
    <main className='mt-20 py-20' id='integration'>
      <section className='px-5 lg:px-20 container mx-auto'>
        <p className='text-primary lg:text-5xl text-2xl text-center font-bold'>
          INTEGRATION
        </p>
        <p className='mt-1 text-center lg:text-base text-xs text-text'>
          Integrating Quanta&apos;s advanced data analytics and management
          solutions into your existing workflow is seamless and straightforward.
          Our integration process is designed to minimize disruption to your
          operations while maximizing the value you derive from your data
          assets. Here&apos;s how it works
        </p>
      </section>

      {steps.map((step, index) => (
        <section
          key={index}
          className={`${
            index % 2 == 0 ? "bg-primary/75 text-bg/90" : "text-text"
          } py-10 lg:py-20 lg:flex lg:flex-row items-center flex-col my-10 lg:my-20 px-5 lg:px-20 container mx-auto`}
        >
          <div
            className={`${index % 2 == 0 ? "order-2" : "order-1"} basis-1/2`}
          >
            <p
              className={`${
                index % 2 == 0 ? "" : "text-primary"
              } font-bold text-base lg:text-2xl`}
            >
              {step.title}
            </p>
            <p className='lg:text-base text-xs mt-2'>{step.body}</p>
          </div>

          <div
            className={`${
              index % 2 == 0 ? "order-1" : "order-2"
            } basis-1/2 flex lg:mt-0 mt-5 items-center justify-center`}
          >
            {/* <Image
              src={pic}
              style={{ maxWidth: "100%", height: "auto" }}
              placeholder='blur'
              width={500}
              height={500}
              quality={100}
              className='object-contain'
              alt='pic'
            /> */}

            <Lottie animationData={step.pic} />
          </div>
        </section>
      ))}
    </main>
  );
};

export default Integration;
