const TransitionWords = () => {
  return (
    <span className="font-extrabold text-primary inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
        <li>Softwares</li>
        <li>Aplicativos</li>
        <li>Produtos Digitais</li>
        <li>Integrações</li>
        <li>Squad Ágeis</li>
        <li aria-hidden="true">Automação</li>
      </ul>
    </span>
  );
};

export default TransitionWords;
