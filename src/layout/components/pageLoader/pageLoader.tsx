import Loading from "components/loading";
import "./styles.scss";

interface Props {

}

const PageLoader: React.FC<Props> = () => {
  return (
    <div className="pageLoader">
      <Loading />
    </div>
  );
};

export default PageLoader;