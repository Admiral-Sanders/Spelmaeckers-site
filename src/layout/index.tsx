import Notification from 'components/notification';
import HomePageContainer from 'pages/homePage';
import MarathonPageContainer from 'pages/marathonPage';
import MenuPageContainer from 'pages/menuPage';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ErrorWatcher from './components/errorWatcher/errorWatcher';
import AppFooter from './components/footer/footer';
import './styles.scss';

interface Props {}

const AppLayout: React.FC<Props> = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isHomePage] = React.useState(location.pathname === '/');
  const [isMarathonPage] = React.useState(location.pathname.includes('marathon'));

  return (
    <>
      <ErrorWatcher />

      {!isMarathonPage && (
        <Notification
          message={t('marathon.notification.title')}
          description={t('marathon.notification.description')}
          linkText={t('marathon.notification.linkText')}
          linkUrl="marathon"
        ></Notification>
      )}

      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/menu" element={<MenuPageContainer />} />
        <Route path="/marathon" element={<MarathonPageContainer />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      {!isHomePage && <AppFooter />}
    </>
  );
};

export default AppLayout;
