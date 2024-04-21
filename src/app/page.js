import Hero from "./home/hero";
import Mac from "./home/mac";
import Features from "./home/features";
import Contact from "./home/contact";
import Integration from "./home/integration";

export default function Home() {
  return (
    <main>
      <div className='px-5 lg:px-20 container mx-auto'>
        <Hero />
        <Mac />
        <Features />
      </div>
      <Integration />

      <div className='px-5 lg:px-20 container mx-auto'>
        <Contact />
      </div>
    </main>
  );
}
