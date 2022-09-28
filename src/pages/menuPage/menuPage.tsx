import ConsumptionItem from 'components/consumptionItem';
import { Consumption, ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { consumptionSorter } from 'utils/sorter';
import './styles.scss';

interface Props {
  consumptionCollection?: ConsumptionCollection;
}

interface GroupedConsumption {
  category: string;
  consumptions: Consumption[];
}

const MenuPage: React.FC<Props> = ({ consumptionCollection }) => {
  const { t } = useTranslation();
  const groupConsumptions = (consumptions: Consumption[]): GroupedConsumption[] => {
    return consumptions.reduce((prev: GroupedConsumption[], curr: Consumption) => {
      const i = prev.findIndex((v) => v.category === curr.category);
      if (i >= 0) {
        prev[i].consumptions.push(curr);
      } else {
        prev.push({
          category: curr.category || '',
          consumptions: [curr],
        });
      }

      return prev;
    }, []);
  };

  const renderConsumptions = (consumptions: Consumption[]) => {
    return consumptions.sort(consumptionSorter).map((consumption) => <ConsumptionItem consumption={consumption} />);
  };

  return (
    <div className="menuPage__container">
      <div className="">
        {groupConsumptions((consumptionCollection?.items as Consumption[]) || [])
          .sort((a, b) => (a.category > b.category ? 1 : -1))
          .map((consumptionGroup) => (
            <div className="consumptionGroup" key={consumptionGroup.category}>
              <h3 className="consumptionGroup_title">
                {t(`consumptionCategory.${consumptionGroup.category.toLowerCase()}`)}
              </h3>
              {renderConsumptions(consumptionGroup.consumptions)}
            </div>
          ))}
      </div>
      <div className="menuPage__info">
        <p>
          Een drankkaart kost <b>12 euro</b>, vraag er gerust eentje aan de bar, of aan de ingang.
          <br />
          Bestellen kan - je raad het nooit - aan de bar. Dus als ge daar dan toch staat voor een kaart, kunt ge
          evengoed wat vakjes laten doorstrepen hé.
        </p>
        <img style={{ maxWidth: 200 }} src="https://despelmaeckers.be/images/event-logo.png"></img>
      </div>
    </div>
  );
};

export default MenuPage;
