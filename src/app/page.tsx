import Beneficios from "@/components/Beneficios";
import Collage from "@/components/Collage";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Parallax from "@/components/Parallax";

export default function Inicio() {
  return (
    <>
      <Hero url="hero"/>
      <Beneficios/>
      <Parallax url="parallax"/>
      <Nosotros/>
      <Collage/>
    </>
  );
}
