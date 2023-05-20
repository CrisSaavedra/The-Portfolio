import { useEffect } from "react";

import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/homes/Home";
import { Projects } from "./components/projects/Projects"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";


export const Portafolio = () => {


    useEffect(() => {

        let nav = document.getElementById('nav-container');
        let back = document.getElementById('back');
        let home = document.getElementById('home');
        let menuNav = document.getElementById('nav')
        let options = document.getElementById('options')


        window.addEventListener("scroll", (e) => {
            let scroll = window.scrollY;
            if (scroll > 0) {
                back.classList.add('background');
            }
            else {
                back.classList.remove('background');
             
            }
        })

    }, []);

    return (

        <div >
            <div id="back" className=""> </div>  {/* CHANGE THE BACKGROUND COLOR OF NAVBAR, IT'S FOR NOT DO ALL AGAIN  */}
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
