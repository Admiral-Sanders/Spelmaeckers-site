import { HashRouter } from 'react-router-dom';
import './app.scss';
import AppLayout from './layout';

function App() {
  return (
    <HashRouter>
      <AppLayout></AppLayout>
    </HashRouter>
  );
}

export default App;
