import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/homes/Home";
import { Projects } from "./components/projects/Projects"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";


export const Portafolio = () => {
    return (

        <div >
            {/* loader aca */}
            <div className="container">
                <NavBar />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>

    )
}
