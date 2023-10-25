import TransitionWords from "../../TransitionWords";

function InitialHero(): JSX.Element {
  return (
    <div
      className="hero min-h-screen"
      id="intro"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay dark:bg-base-100/70 backdrop-blur-sm vignette"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <div className="space-y-2">
            <p className="text-sm font-bold">TECNOLOGIA & SERVIÇOS DIGITAIS</p>
            <h1 className="text-4xl font-bold">Somos especialistas em </h1>
            <TransitionWords />
            <p className="text-2xl">
              Comece a executar seus projetos agora mesmo com a{" "}
              <span className="font-bold bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
                OwlCode
              </span>
              , e potencialize seu negócio!
              <br />
              Nos criamos produtos e soluções digitais focados nas necessidades
              dos nossos clientes.
            </p>
            <button className="btn btn-outline border-primary">
              Quero saber mais sobre squad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialHero;
