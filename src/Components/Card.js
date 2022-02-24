import './Card.css';
import person from '../imgs/person1.png';
import star from '../imgs/star.svg';

function Card() {
  return (
    <div className='card'>
      <div className='card--image'>
        <p className='card--image__text'>Sold out</p>
        <img src={person} alt='person' className='card--image__img' />
      </div>
      <div className='card--description'>
        <div className='card--description__rating'>
          <img src={star} alt='star' /> 5.0{' '}
          <span className='light'>(6) USA</span>
        </div>
        <p className='card--description__title'>
          Life lessons with Katie Zaferes
        </p>
        <p className='card--description__price'>
          <span className='bold'>From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
