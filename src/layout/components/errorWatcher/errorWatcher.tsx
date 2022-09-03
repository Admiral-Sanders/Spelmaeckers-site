import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import './styles.scss';

interface Props {}

const ErrorWatcher: React.FC<Props> = () => {
  const { t } = useTranslation();
  const errors = useSelector((state: RootState) => state.graphql.errors);

  return (
    <div>
      {errors.map((error, index) => (
        <Alert message={t('error.somethingWentWrong')} description={error} type="error" showIcon closable />
      ))}
    </div>
  );
};

export default ErrorWatcher;
