import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/theme/theme.context";
import NavBarDropDownComponent from "./components";
import { INavBar } from "./interfaces/navBar.interface";

function NavBarComponent(props: INavBar) {
  const { darkMode } = useTheme();
  const [sticky, setSticky] = useState<boolean>(props.sticky || false);
  const themeClass = darkMode ? "theme-dark" : "theme-light";

  useEffect(() => {
    if (props.sticky !== undefined) {
      setSticky(props.sticky);
    }
  }, [props.sticky]);
  console.log("sticky", sticky);
  return (
    <div
      className={`navbar bg-primary text-primary-content ${
        sticky ? "fixed" : ""
      } z-50`}
    >
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
