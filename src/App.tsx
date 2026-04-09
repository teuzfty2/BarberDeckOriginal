
// Lib
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Componentes
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
