import { Consumption } from 'graphql/schema';
import './styles.scss';

interface Props {
  consumption: Consumption;
}

const ConsumptionItem: React.FC<Props> = ({ consumption }) => {
  const renderDice = (ticketAmount?: number | null) => {
    const diceArray = [];

    if (ticketAmount && Number.isInteger(ticketAmount)) {
      const amountOfSixes = ~~(ticketAmount / 6);
      const leftover = ticketAmount % 6;

      for (let i = 0; i < amountOfSixes; i++) {
        diceArray.push(<div className="consumptionItem_ticket die amount-6"></div>);
      }
      if (leftover != 0) {
        diceArray.push(<div className={'consumptionItem_ticket die amount-' + leftover}></div>);
      }
    }

    return diceArray;
  };

  return (
    <div className="consumptionItem" key={consumption.name}>
      <div className="consumptionItem_title">{consumption.name}</div>
      <div className="consumptionItem_dice">{renderDice(consumption.ticketAmount)}</div>
    </div>
  );
};

export default ConsumptionItem;
