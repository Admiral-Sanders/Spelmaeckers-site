import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./styles.scss";

interface Props {

}

const AppHeader: React.FC<Props> = () => {
  return (
    <Header>
      <div className="header container">
        <div className="logo">De Spelmaeckers</div>
      </div>
    </Header>
  );
};

export default AppHeader;