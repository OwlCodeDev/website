import { ThemeProvider } from "./contexts/theme/theme.context";
import NavBarComponent from "./components/NavBar/navBar.component";
import RoutesProvider from "./routes";
import HeroCenteredComponent from "./components/Hero/CenteredHero";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBarComponent title="OwlMind" sticky={true} />
        <RoutesProvider />
      </ThemeProvider>
    </>
  );
}

export default App;
