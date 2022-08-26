import { HashRouter } from 'react-router-dom';
import './app.scss';
import AppLayout from './layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout></AppLayout>
    </HashRouter>
  );
};

export default App;
