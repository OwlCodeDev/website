import OwlCodeLogoComponent from "../OwlCodeLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NavBarComponent() {
  return (
    <div className="navbar z-10 absolute">
      <div className="flex-1">
        <a>
          <OwlCodeLogoComponent height={60} />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="underline-animation hover:before:bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] hover:bg-transparent"
              href="#contactHero"
            >
              Fale conosco
              <FontAwesomeIcon icon={faComment} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarComponent;
