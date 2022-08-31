import { Consumption, ConsumptionCollection, useGetConsumptionsQuery } from 'graphql/schema';
import './styles.scss';

interface Props {
  consumptionCollection?: ConsumptionCollection;
}

interface GroupedConsumption {
  category: string;
  consumptions: Consumption[];
}

const sorter = (a: Consumption, b: Consumption): number => {
  return a.ticketAmount! - b.ticketAmount! !== 0 ? a.ticketAmount! - b.ticketAmount! : a.name! > b.name! ? 1 : -1;
};

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
    return consumptions.sort(sorter).map((consumption) => (
      <div className="consumption" key={consumption.name}>
        <span className="consumption_title">{consumption.name}</span>
        <span className="consumption_ticket">{consumption.ticketAmount}</span>
      </div>
    ));
  };

  return (
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
