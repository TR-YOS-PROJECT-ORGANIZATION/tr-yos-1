import YosContextProvider from "./context/YosContext";
import AppRouter from "./AppRouter";


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