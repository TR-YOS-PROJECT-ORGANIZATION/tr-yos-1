import YosContextProvider from "./context/YosContext";
import AppRouter from "./AppRouter";
import React from "react";

function App() {
  return (
    <div>
      <YosContextProvider>
        <AppRouter />
      </YosContextProvider>
    </div>
  );
}
export default App;
