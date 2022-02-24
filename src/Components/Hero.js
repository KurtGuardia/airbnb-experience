import './Hero.css';
import grid from '../imgs/grid.svg';

function NavBar() {
  return (
    <section className='hero'>
      <img src={grid} alt='grid' className='hero--grid' />
      <div className='hero--text'>
        <h1 className='hero--text__title'>Online Experience</h1>
        <p className='hero--text__p'>
          Join unique interactive activitie led by one-of-a-kind hosts-all
          without leaving home
        </p>
      </div>
    </section>
  );
}

export default NavBar;
