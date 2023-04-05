import hamburger from '../../../assets/buttons/hamburger.svg';
import close from '../../../assets/buttons/close.svg';
import { useEffect } from 'react';

export const Menu = () => {

    const onClickButtons = (e) => {
        e.preventDefault();
        const hamburger = document.getElementById('hamburger-button');
        const menuNav = document.getElementById('nav')
        const xButton = document.getElementById('x-button');

        if (e.target.parentElement === hamburger) {
            menuNav.classList.add('a-buttonsMenu-1');
            menuNav.style.display = "block";
            menuNav.style.backgroundColor = "#262727"
            
        } else {
            menuNav.classList.add('a-buttonsMenu-1-reverse');
            hamburger.style.display = "block";
        }
    }

    const eventListAnimation = () => {
        const menuNav = document.getElementById('nav')
        const hamburger = document.getElementById('hamburger-button');
        menuNav.addEventListener('animationend', (e) => {
            if (e.animationName === 'buttonsMenu1Reverse') {
                menuNav.style.display = "none";
                menuNav.classList.remove('a-buttonsMenu-1-reverse');

            }
            if (e.animationName === 'buttonsMenu1') {
                menuNav.classList.remove('a-buttonsMenu-1');
                hamburger.style.display = "none";
            }
        })

    }

    const eventListResize = () => {
        window.addEventListener('resize', () => {
            let element = document.getElementById('nav');
            let hambuerger = document.getElementById('hamburger-button');
            if (window.innerWidth > 1080) {
                element.style.display = "block";
                hambuerger.style.display = "none";
                if(window.scrollY > 40){
                    element.style.backgroundColor = "#262727"
                }else{
                    element.style.backgroundColor = "#191919"
                }
                
            } else {
                element.style.display = "none";
                hambuerger.style.display = "block";

            }
        })
    }

    const goToAbout = (e, goTo) => {
        e.preventDefault();
        let element = document.getElementById(goTo)
        if (element.id === 'home') {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            var moreLess = 110;
            var elementPosition  = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - moreLess;
      
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });   
        }

    }



    useEffect(() => {
        eventListAnimation();
        eventListResize();

    }, []);

    return (
        <div>
            <a id='hamburger-button' onClick={e => onClickButtons(e)} href="#"><img className='hamburger-icon' src={hamburger} alt="hamburger" width={60}></img></a>
            <nav id="nav" className="options-container ">
                <a className='x-button' id='x-button' onClick={e => onClickButtons(e)} href="#"><img src={close} alt="button" width={16} /></a>
                <div id='options' className="options">
                    <a href="#" onClick={e => goToAbout(e, 'home')}>Home</a>
                    <a href="#" onClick={e => goToAbout(e, 'about')}>About</a>
                    <a href="#" onClick={e => goToAbout(e, 'projects')}>Projects</a>
                    <a href="#" onClick={e => goToAbout(e, 'contact')}><span>Contact</span></a>
                </div>
            </nav>
        </div>
    )
}
