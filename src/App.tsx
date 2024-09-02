import "./App.css";
import { useAnalytics } from "./hooks/GoogleAnalytics";
import { Home } from "./pages/Home";

function App() {
  const { initialize } = useAnalytics();

  initialize();

  return <Home />;
}

export default App;
