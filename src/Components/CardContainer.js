import './CardContainer.css';
import Card from './Card';
import data from '../data';

function CardContainer() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);

  return <section className='card-container'>{cards}</section>;
}

export default CardContainer;
