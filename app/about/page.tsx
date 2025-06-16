import Hero from '@/components/about/Hero';
import MisionVision from '@/components/about/MisionVision';
import Historia from '@/components/about/Historia';
import Valores from '@/components/about/Valores';
import Team from '@/components/about/Team';
import Propuesta from '@/components/about/Propuesta';
import Separador from '@/components/ui/Separador';

export default function About() {
  return (
    <>
      <main className="text-gray-600">
        <Hero />
        <MisionVision />
        <Historia />
        <Valores />
        <Propuesta />
        <Separador />
        <Team />
      </main>
    </>
  );
}
