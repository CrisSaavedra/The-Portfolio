import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/homes/Home";
import { Projects } from "./components/projects/Projects"
import { About } from "./components/about/About";

export const Portafolio = () => {
    return (

        <div className="container">
            {/* loader aca */}
            <NavBar />
            <Home />
            <About/>
            <Projects/>
        </div>

    )
}
