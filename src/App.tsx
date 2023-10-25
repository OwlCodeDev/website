import { ThemeProvider } from "./contexts/theme/theme.context";

import NavBarComponent from "./components/NavBar/navBar.component";
import InitialHero from "./components/Hero/InitialHero";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBarComponent />
        <InitialHero />
      </ThemeProvider>
    </>
  );
}

export default App;
