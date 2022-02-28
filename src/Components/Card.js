import './Card.css';
import star from '../imgs/star.svg';

function Card(props) {
  console.log(props);
  let badgeText;
  props.openSpots === 0
    ? (badgeText = 'SOLD OUT')
    : (badgeText = `${props.location}`);

  return (
    <div className='card'>
      <div className='card--image'>
        {badgeText && <p className='card--image__text'>{badgeText}</p>}
        <img
          src={`./imgs/${props.coverImg}`}
          alt='person'
          className='card--image__img'
        />
      </div>
      <div className='card--description'>
        <div className='card--description__rating'>
          <img src={star} alt='star' />
          {props.stats.rating.toFixed(1)}{' '}
          <span className='light'>
            ({props.stats.reviewCount}) {props.country}
          </span>
        </div>
        <p className='card--description__title'>{props.title}</p>
        <p className='card--description__price'>
          <span className='bold'>From $ {props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
