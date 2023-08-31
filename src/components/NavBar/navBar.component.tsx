import { useTheme } from "../../contexts/theme/theme.context";
import NavBarDropDownComponent from "./components";
import { INavBar } from "./interfaces/navBar.interface";

function NavBarComponent(props: INavBar) {
  const { darkMode } = useTheme();
  const themeClass = darkMode ? "theme-dark" : "theme-light";
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <NavBarDropDownComponent />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{props.title}</a>
      </div>
    </div>
  );
}

export default NavBarComponent;
