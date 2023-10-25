const TransitionWords = () => {
  return (
    <div className="font-extrabold text-5xl">
      <span className="text-primary inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
          <li>Softwares</li>
          <li>Aplicativos</li>
          <li>Produtos Digitais</li>
          <li>Integrações</li>
          <li>Squad Ágeis</li>
          <li aria-hidden="true">Automação</li>
        </ul>
      </span>
    </div>
  );
};

export default TransitionWords;
