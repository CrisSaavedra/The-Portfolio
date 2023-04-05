import cssIcon from '../../assets/techIcons/css.svg';
import htmlIcon from '../../assets/techIcons/html.svg';
import jsIcon from '../../assets/techIcons/javascript.svg';
import reactIcon from '../../assets/techIcons/react.svg';
import sass from '../../assets/techIcons/sass.svg';
import tailIcon from '../../assets/techIcons/tailwind.svg';


export const Home = () => {
    return (
        <div id='home' className="home-container">

            <div className="first-text">
                <h2>REACT FRONT-END DEVELOPER💻</h2>
            </div>

            <div className="home-text">
                <p><span className="hello">Hello</span> 😸, I'm Cristian, the developer who can help you create what you imagine.</p>
            </div>

            <div className="tech-container">
                <h5>TECH STACK</h5>
                <div className='techs'>
                    <img src={cssIcon} alt="cssicon" width={25} />
                    <img src={htmlIcon} alt="htmlIcon" width={25} />
                    <img className='js' src={jsIcon} alt="jsIcon" width={21} />
                    <img src={reactIcon} alt="reactIcon" width={25} />
                    <img src={sass} alt="sass" width={25} />
                    <img src={tailIcon} alt="tailIcon" width={25} />
                </div>

            </div>
        </div>
    )
}
