import { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel";
import DividerComponent from "../../components/Divider";
import HeroCenteredComponent from "../../components/Hero/CenteredHero";
import CircleComponent from "../../components/Circle";
import RotatingCircle from "../../components/Circle";

function HomePage() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    // Função para verificar a seção visível durante o scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    // Adiciona um listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Chama a função para inicializar a seção atual
    handleScroll();

    // Remove o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(currentSection);

  return (
    <>
      <section id="section1">
        <CarouselComponent type="slide">
          <HeroCenteredComponent title="Teste 1" descricao="Teste 1" key={1} />
          <HeroCenteredComponent title="Teste 2" descricao="Teste 2" key={2} />
        </CarouselComponent>
      </section>
      <DividerComponent href="#section2" />
      <section id="section2" className="min-h-screen">
        Olar
      </section>
      <DividerComponent href="#section3" />
      <section id="section3" className="min-h-screen">
        <RotatingCircle />
      </section>
      <div>Você está atualmente na seção: {currentSection}</div>
    </>
  );
}

export default HomePage;
