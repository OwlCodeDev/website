import { ThemeProvider } from "./contexts/theme/theme.context";

import NavBarComponent from "./components/NavBar/navBar.component";
import InitialHero from "./components/Hero/InitialHero";
import AboutUsHero from "./components/Hero/AboutUs";
import ContactComponent from "./components/Contact";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBarComponent />
        <InitialHero />
        <AboutUsHero />
        <ContactComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
