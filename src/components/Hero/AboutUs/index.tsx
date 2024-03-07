function AboutUsHero() {
  return (
    <section id="aboutUsHero">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="border-primary rounded border-2 w-full flex flex-col items-center">
            <div className="relative -top-10 pb-20 bg-base-100 w-3/4 flex flex-col items-center">
              <h1 className="text-4xl">Contrate uma empresa</h1>
              <h1 className="text-4xl font-bold text-primary">
                Especialista em tecnologia
              </h1>
            </div>
          </div>
          <div className="card w-5/6 bg-base-200/50 backdrop-blur-3xl text-primary-content relative -top-20 ">
            <div className="card-body space-y-5">
              <p className="md:text-2xl text-center text-white">
                Nossa empresa é especializada em desenvolvimento de soluções
                tecnológicas sob medida para atender às necessidades específicas
                de nossos clientes. <br />
                Com uma equipe de especialistas em desenvolvimento de software,
                utilizamos as mais avançadas tecnologias e metodologias para
                garantir a qualidade e eficiência em cada projeto. <br />
                Estamos comprometidos com a satisfação do cliente, oferecendo
                serviços personalizados que abrangem desde consultoria inicial
                até implementação e suporte contínuo. <br />
                Se você busca uma parceria confiável para impulsionar a
                transformação digital de sua empresa, estamos aqui para ajudar.
              </p>
            </div>
            <div className="items-center flex flex-col md:flex md:flex-row md:justify-around">
              <div>
                <div className="font-bold text-5xl text-primary">+100</div>
                <div className="font-bold text-white">
                  Projetos concluídos
                </div>
              </div>
              <div>
                <div className="font-bold text-5xl text-primary">+35</div>
                <div className="font-bold text-white">Clientes Ativos</div>
              </div>
              <div>
                <div className="font-bold text-5xl text-primary">+10</div>
                <div className="font-bold text-white">Anos de atuação</div>
              </div>
            </div>
            <div className="card-actions justify-center m-5">
              <a className="btn btn-primary" href="#contactHero">
                Fale com nossos especialistas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsHero;
