import hamburger from '../../../assets/buttons/hamburger.svg';
import close from '../../../assets/buttons/close.svg';
import { useEffect } from 'react';

export const Menu = () => {

    const onClickButtons = (e) => {
        e.preventDefault();
        const element = e.target.parentElement;

        if (element.id === 'hamburger-button') {
            const nextElement = e.target.parentElement.nextElementSibling;
            nextElement.style.display = "block";
            element.style.display = "none";

        } else
            if (element.id === 'x-button') {
                const parent = element.parentElement;
                const hamburgerElement = element.parentElement.previousElementSibling;
                parent.style.display = "none";
                hamburgerElement.style.display = "block";
            }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            let element = document.getElementById('nav');
            let hambuerger = document.getElementById('hamburger-button');
            if(window.innerWidth > 1080){
                element.style.display= "block";
                hambuerger.style.display = "none";
            }else{
                element.style.display= "none";
                hambuerger.style.display = "block";
            }
        })
    }, []);

    return (
        <div>
            <a id='hamburger-button' onClick={e => onClickButtons(e)} href="#"><img className='hamburger-icon' src={hamburger} alt="hamburger" width={60}></img></a>
            <nav id="nav" className="options-container">
                <a className='x-button' id='x-button' onClick={e => onClickButtons(e)} href="#"><img src={close} alt="button" width={16} /></a>
                <div className="options">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#"><span>Contact</span></a>
                </div>
            </nav>
        </div>
    )
}
