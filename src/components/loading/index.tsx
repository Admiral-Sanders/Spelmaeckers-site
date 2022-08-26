import './styles.scss';

interface Props {
  showText?: boolean;
}

const Loading: React.FC<Props> = ({ showText = true }) => {
  return (
    <div className="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {showText && <p>Loading</p>}
    </div>
  );
};

export default Loading;
