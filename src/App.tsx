import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  const [isGreenTheme, setIsGreenTheme] = useState(false);

  return (
    <HelmetProvider>
      <div className="App">
        {isGreenTheme && (
          <Helmet>
            <link rel="stylesheet" type="text/css" href="./green.css" />
          </Helmet>
        )}
        <input
          type="checkbox"
          id="change-theme"
          onChange={() => setIsGreenTheme(!isGreenTheme)}
        />
        <label htmlFor="change-theme">Использовать зелёную тему</label>
      </div>
    </HelmetProvider>
  );
}

export default App;
