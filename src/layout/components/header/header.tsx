import { Header } from 'antd/lib/layout/layout';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  title?: string;
}

const AppHeader: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const headerText = title ? `De Spelmaeckers | ${t(title)}` : 'De Spelmaeckers';

  return (
    <Header>
      <div className="header container">
        <a href="/">
          <div className="logo">{headerText}</div>
        </a>
      </div>
    </Header>
  );
};

export default AppHeader;
