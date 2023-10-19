import { useTheme } from "../../../contexts/theme/theme.context";
import { IHeroCentered } from "./interfaces/IHeroCentered.interface";

function HeroCenteredComponent(props: IHeroCentered) {
  return (
    <div className="hero bg-base-200" style={{minHeight: '99vh'}}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{props.title}</h1>
          <p className="py-6">{props.descricao}</p>
          {props.buttonLabel && (
            <button className="btn btn-primary">{props.buttonLabel}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroCenteredComponent;
