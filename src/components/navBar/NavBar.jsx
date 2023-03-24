import { Menu } from "./menu/Menu"


export const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <h3>crisdev</h3>
        </div>

        <Menu/>

    </div>
  )
}
