import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./router/AnimatedRoutes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
