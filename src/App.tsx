import React from "react";
import Header from "./components/header/header";
import { ThemeProvider } from "./contexts/theme/theme.context";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
