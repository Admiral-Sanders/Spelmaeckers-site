import HomePageContainer from 'pages/homePage';
import MenuPageContainer from 'pages/menuPage';
import * as React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ErrorWatcher from './components/errorWatcher/errorWatcher';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import './styles.scss';

interface Props {}

const AppLayout: React.FC<Props> = () => {
  const location = useLocation();
  const [isHomePage] = React.useState(location.pathname === '/');

  return (
    <>
      {/* //INFO Sander -> ik wou het woord Prijslijst bij in die header, dus voorlopig op deze manier opgelost.
    title wordt meegegeven aan appheader, als die string leeg is dan staat er gewoon "De Spelmaeckers", anders komt de string er bij.

    als er ooit nog extra pagina's bijkomen is dit uiteraard niet de oplossing...
    */}
      {!isHomePage && <AppHeader title="Prijslijst" />}

      <ErrorWatcher />

      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/menu" element={<MenuPageContainer />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      {!isHomePage && <AppFooter />}
    </>
  );
};

export default AppLayout;
