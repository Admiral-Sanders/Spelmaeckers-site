import { Consumption } from 'graphql/schema';
import './styles.scss';

interface Props {
  consumption: Consumption;
}

const ConsumptionItem: React.FC<Props> = ({ consumption }) => {
  let aantalZessen = 0;
  let rest = 0;
  function prepDice(prijs?: number | null) {
    let tmpArray = [];
    if (prijs != null) {
      aantalZessen = ~~(prijs / 6);
      rest = prijs % 6;

      for (let i = 0; i < aantalZessen; i++) {
        tmpArray.push(<div className="consumptionItem_ticket die amount-6"></div>);
      }
      if (rest != 0) {
        tmpArray.push(<div className={'consumptionItem_ticket die amount-' + rest}></div>);
      }
    }
    return tmpArray;
  }

  return (
    <div className="consumptionItem" key={consumption.name}>
      <div className="consumptionItem_title">{consumption.name}</div>
      <div className="consumptionItem_dice">{prepDice(consumption.ticketAmount)}</div>
    </div>
  );
};

export default ConsumptionItem;
