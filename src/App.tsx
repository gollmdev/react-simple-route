import "@/core/component-registry/module-auto-loader";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";

function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
}

export default App;
