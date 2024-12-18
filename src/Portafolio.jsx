import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/homes/Home";
import { Projects } from "./components/projects/Projects"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";


export const Portafolio = () => {

    return (
        <div >
            <NavBar />
            <div className="container">
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>

    )
}
