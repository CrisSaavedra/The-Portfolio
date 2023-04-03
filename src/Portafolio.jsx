import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/homes/Home";
import { Projects } from "./components/projects/Projects"

export const Portafolio = () => {
    return (

        <div className="container">
            {/* loader aca */}
            <NavBar />
            <Home />
            {/* <Projects/> */}
        </div>

    )
}
