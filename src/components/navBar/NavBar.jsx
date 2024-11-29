import { Menu } from "./menu/Menu"
import logo from '../../assets/logo.png';
import { useEffect, useRef } from "react";


export const NavBar = () => {

  const navBar = useRef(null);

  useEffect(() => {
    const onScroll = window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      navBar.current.classList.toggle("bg_black", scrollTop > 0);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [])

  return (
    <nav className="nav-fixe-01" ref={navBar} >
      <div id="nav-container" className="nav-container scrollNabar" >
        <div className="logo-container">
          <img src={logo} alt="logo" width={50} />
          <h1>crisisaave</h1>
        </div>
        <Menu />
      </div>
    </nav>
  )
}
