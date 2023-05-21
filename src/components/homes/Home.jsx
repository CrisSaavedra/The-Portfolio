import ts from '../../assets/techIcons/ts.svg';
import node from '../../assets/techIcons/node.svg';
import jsIcon from '../../assets/techIcons/javascript.svg';
import reactIcon from '../../assets/techIcons/react.svg';
import sass from '../../assets/techIcons/sass.svg';
import tailIcon from '../../assets/techIcons/tailwind.svg';
import mongo from '../../assets/techIcons/mongo.svg';
import mysql from '../../assets/techIcons/mysql.svg';
import postgresql from '../../assets/techIcons/postgresql.svg';
import java from '../../assets/techIcons/java.svg';


export const Home = () => {
    return (
        <div id='home' className="home-container">

            <div className="first-text">
                <h2>DESARROLLADOR WEB💻</h2>
            </div>

            <div className="home-text">
                <p><span className="hello">Hola</span> 😸, Soy Cristian, el desarrollador que puede ayudar a crear lo que imaginas.</p>
            </div>

            <div className="tech-container">
                <h5>TECNOLOGÍAS</h5>
                <div className='techs techbar'>
                    <img className='js' src={jsIcon} alt="jsIcon" width={21} />
                    <img className='js' src={ts} alt="tsicon" width={21}/>
                    <img src={reactIcon} alt="reactIcon" width={25}/>
                    <img src={tailIcon} alt="sass" width={25} />
                    <img src={sass} alt="tailIcon" width={25} />
                    <img src={node} alt="htmlIcon" width={25} />
                    <img className='js' src={java} alt="htmlIcon" width={21} /> 
                    <img src={mongo} alt="htmlIcon" width={25} /> 
                    <img src={mysql} alt="htmlIcon" width={25} /> 
                    <img  className='js' src={postgresql} alt="htmlIcon" width={23} /> 
                    

                                  
                </div>
                

            </div>
        </div>
    )
}
