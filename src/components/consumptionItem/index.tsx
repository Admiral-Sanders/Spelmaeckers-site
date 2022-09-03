import { Consumption } from 'graphql/schema';
import './styles.scss';

interface Props {
  consumption: Consumption;
}

const ConsumptionItem: React.FC<Props> = ({ consumption }) => {
  // MATTI Dit is de styling van 1 item
  return (
    <div className="consumptionItem" key={consumption.name}>
      <span className="consumptionItem_title">{consumption.name}</span>
      <span className="consumptionItem_ticket">{consumption.ticketAmount}</span>
    </div>
  );
};

export default ConsumptionItem;
