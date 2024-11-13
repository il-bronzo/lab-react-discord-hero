import "./Navbar.css";
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function Navbar () {
    return( 
    <nav className = "navbar">
        <ul className = "nav-container">   
            <li> <img src={discordLogo} alt="Discord Logo" className="logo" /> </li>
            <li> <img src={menuIcon} alt="Menu Icon" className="menu-icon" /> </li>
        </ul>
    </nav>
    );
}

export default Navbar;