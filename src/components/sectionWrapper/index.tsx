import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  title: string;
  children: any;
}

const SectionWrapper: React.FC<Props> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <section className="sectionWrapper container">
      <h1 className="sectionTitle">{t(title)}</h1>

      {children}
    </section>
  );
};

export default SectionWrapper;
