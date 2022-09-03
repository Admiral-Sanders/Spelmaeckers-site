import ConsumptionItem from 'components/consumptionItem';
import { Consumption, ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
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
    // MATTI Hier geven we 1 consumptie item door (kan aangevuld worden met extra info indien nodig)
    return consumptions.sort(consumptionSorter).map((consumption) => <ConsumptionItem consumption={consumption} />);
  };

  return (
    // MATTI Hier kan je de consumptie groepen aanpassen (eten of drank).
    <div className="menuPage">
      {groupConsumptions((consumptionCollection?.items as Consumption[]) || [])
        .sort((a, b) => (a.category > b.category ? 1 : -1))
        .map((consumptionGroup) => (
          <div className="consumptionGroup" key={consumptionGroup.category}>
            <h1 className="consumptionGroup_title">{consumptionGroup.category}</h1>
            {renderConsumptions(consumptionGroup.consumptions)}
          </div>
        ))}
    </div>
  );
};

export default MenuPage;
