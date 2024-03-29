import CircleStacks from "../../CircleStacks";
import CircleStacksMobile from "../../CircleStacksMobile";

function StacksHero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:display">
          <CircleStacks />
        </div>
        <div className="md:hidden">
          <CircleStacksMobile />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Estamos no core das principais
            <span className="text-primary"> tecnologia</span>!
          </h1>
          <p className="py-6">
            Desenvolvemos softwares, aplicativos, plataformas, com as principais
            tecnologias no mercado, garantindo assim um desenvolvimento de
            qualidade e robusto!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StacksHero;
