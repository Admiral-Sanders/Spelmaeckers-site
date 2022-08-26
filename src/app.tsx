import "./app.scss";
import {
  HashRouter
} from "react-router-dom";
import AppLayout from "./layout";

function App() {
  return (
    <HashRouter>
      <AppLayout></AppLayout>
    </HashRouter>
  );
}

export default App;
