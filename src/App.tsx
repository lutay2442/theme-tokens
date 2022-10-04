import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

function App() {
  const [isGreenTheme, setIsGreenTheme] = useState(false);
  const onChangeTheme = () => setIsGreenTheme(!isGreenTheme);

  return (
    <HelmetProvider>
      <div className="App">
        {isGreenTheme && (
          <Helmet>
            <link rel="stylesheet" type="text/css" href="./green.css" />
          </Helmet>
        )}
        <input type="checkbox" id="change-theme" onChange={onChangeTheme} />
        <label htmlFor="change-theme">Переключить тему</label>
      </div>
    </HelmetProvider>
  );
}

export default App;
