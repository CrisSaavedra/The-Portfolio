import weather from '../../assets/screens/weather.png';
import moviet from '../../assets/screens/moviet.png';
import humano from '../../assets/screens/humano.png';
import gitHub from '../../assets/buttons/githubbtn.svg';
import live from '../../assets/buttons/live3btn.svg';


export const Projects = () => {

  return (
    <div id='projects' className="projects-container">
      <div className='title-project'>
        <div className='line'></div>
        <h3><span>P</span>rojects</h3>
      </div>

      {/* project 1  */}

      <div className="display-projects">
        <img className='screen' src={humano} alt="humano project img" />
        <div className='text-container'>
          <div className='text-project'>
            <h5>HUMANO BARBER</h5>
            <p>WEB DESIGN FOR A BARBER</p>
            <p className='techs-use'>REACT - SASS</p>
          </div>
          <div className='btn-project'>
            <a href="https://github.com/CrisSaavedra/humano-barber-chile" target="_blank"><img src={gitHub} alt="github logo" width={20} />GITHUB</a>
            <a href="https://master--humano-barber-demo.netlify.app/" target="_blank"><img src={live} alt="live logo" width={28} />LIVE</a>
          </div>
        </div>
      </div>

      {/* project 3  */}

      <div className="display-projects">
        <img className='screen' src={weather} alt="weather project img" />
        <div className='text-container'>
          <div className='text-project'>
            <h5>THE WEATHER</h5>
            <p>Search for a place and find its climate!</p>
            <p className='techs-use'>REACT - TAILWIND</p>
          </div>
          <div className='btn-project'>
            <a href="https://github.com/CrisSaavedra/The-simple-weather" target="_blank"><img src={gitHub} alt="github logo" width={20} />GITHUB</a>
            <a href="https://the-simple-weather-csaave.netlify.app" target="_blank"><img src={live} alt="live logo" width={28} />LIVE</a>
          </div>
        </div>
      </div>

      {/* project 3  */}

      <div className="display-projects">
        <img className='screen' src={moviet} alt="weather project img" />
        <div className='text-container'>
          <div className='text-project'>
            <h5>Moviet</h5>
            <p>search and save your favorite movies :)</p>
            <p className='techs-use'>REACT - NODE - BOOTSTRAP</p>
          </div>
          <div className='btn-project'>
            <a href="https://github.com/CrisSaavedra/Moviet" target="_blank"><img src={gitHub} alt="github logo" width={20} />GITHUB</a>
            <a href="https://moviet.onrender.com" target="_blank"><img src={live} alt="live logo" width={28} />LIVE</a>
          </div>
        </div>
      </div>


    </div>
  )
}
