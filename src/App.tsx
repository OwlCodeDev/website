import { ThemeProvider } from "./contexts/theme/theme.context";
import NavBarComponent from "./components/NavBar/navBar.component";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBarComponent title="OwlCode" />
      </ThemeProvider>
    </>
  );
}

export default App;
