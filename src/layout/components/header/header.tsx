import { Header } from 'antd/lib/layout/layout';
import './styles.scss';

interface Props {
  title: string;
}

const AppHeader: React.FC<Props> = ({ title }) => {
  const headerCopy = title != '' ? `De Spelmaeckers | ${title}` : 'De Spelmaeckers';

  return (
    <Header>
      <div className="header container">
        <div className="logo">{headerCopy}</div>
      </div>
    </Header>
  );
};

export default AppHeader;
