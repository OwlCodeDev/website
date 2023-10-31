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
              <p className="text-2xl text-center dark:text-white">
                Somos uma empresa de tecnologia que ajuda empresas a transformar
                seus negócios através da nossa consultoria. <br />
                Com uma equipe de especialistas utilizamos as melhores
                tecnologias e metodologias para garantir a qualidade e
                eficiência. <br />
                Estamos comprometido com a satisfação do cliente e oferecemos
                serviços personalizado para atender às necessidades específicas
                de cada cliente.
              </p>
            </div>
            <div className="flex flex-row justify-around">
              <div>
                <div className="font-bold text-5xl text-primary">+200</div>
                <div className="font-bold dark:text-white">
                  Projetos concluídos
                </div>
              </div>
              <div>
                <div className="font-bold text-5xl text-primary">+45</div>
                <div className="font-bold dark:text-white">Clientes Ativos</div>
              </div>
              <div>
                <div className="font-bold text-5xl text-primary">+10</div>
                <div className="font-bold dark:text-white">Anos de atuação</div>
              </div>
            </div>
            <div className="card-actions justify-center m-5">
              <a className="btn btn-primary" href="#contact">Fale com nossos especialistas</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsHero;
