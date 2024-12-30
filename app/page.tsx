import Navbar from '@/components/ui/navbar';
import Hero from '@/components/ui/hero';
import About from '@/components/ui/about';
import Projects from '@/components/ui/projects';
import { div, i } from 'framer-motion/client';


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}
