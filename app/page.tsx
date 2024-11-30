import Hero from '@/components/ui/hero';
import About from '@/components/ui/about';
import Projects from '@/components/ui/projects';


export default function Home() {
  return (
    <div className='max-w-full'>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
