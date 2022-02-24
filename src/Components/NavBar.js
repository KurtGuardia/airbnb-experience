import './NavBar.css';
import airbnbLogo from '../imgs/airbnb-logo.svg';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <img src={airbnbLogo} alt='Airbnb Logo' className='nav-bar--logo' />
    </nav>
  );
}

export default NavBar;
