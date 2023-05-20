import { Menu } from "./menu/Menu"
import logo from '../../assets/logo.png';
import hamburger from '../../assets/buttons/hamburger.svg';


export const NavBar = () => {
  return (
    <div className="nav-fixe-01">
      <div id="nav-container" className="nav-container scrollNabar">
        <div className="logo-container">
          <img src={logo} alt="logo" width={50} />
          <h1>crisdev</h1>
        </div>
        <Menu />
      </div>
    </div>
  )
}
