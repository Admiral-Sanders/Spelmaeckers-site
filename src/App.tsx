import "./app.scss";
import {
  BrowserRouter as Router
} from "react-router-dom";
import AppLayoutContainer from "./layout";

function App() {
  return (
    <Router>
      <AppLayoutContainer></AppLayoutContainer>
    </Router>
  );
}

export default App;
