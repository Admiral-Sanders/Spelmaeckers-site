import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
  backgroundImage: string;
  text: string;
  link: string;
}

const LinkSection: React.FC<Props> = ({ backgroundImage, text, link }) => {
  const { t } = useTranslation();

  return (
    <section className="linkSection" style={{ backgroundImage: `url(${backgroundImage})`, height: '250px' }}>
      <a href={link} target="_blank" className="call-to-action">
        {t(text)}
      </a>
    </section>
  );
};

export default LinkSection;
