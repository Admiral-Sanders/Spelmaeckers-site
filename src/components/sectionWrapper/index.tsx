import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const SectionWrapper: React.FC<Props> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <section className="sectionWrapper container">
      {title && <h1 className="sectionTitle">{t(title)}</h1>}

      {children}
    </section>
  );
};

export default SectionWrapper;
