import HomePageContainer from 'pages/homePage';
import MenuPageContainer from 'pages/menuPage';
import * as React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import './styles.scss';

interface Props {}

const AppLayout: React.FC<Props> = () => {
  const location = useLocation();
  const [isHomePage] = React.useState(location.pathname === '/');

  return (
    <>
      {!isHomePage && <AppHeader />}

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
