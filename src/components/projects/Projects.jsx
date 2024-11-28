import weather from '../../assets/screens/weather.png';
import moviet from '../../assets/screens/moviet.png';
import humano from '../../assets/screens/humano.png';
import gitHub from '../../assets/buttons/githubbtn.svg';
import live from '../../assets/buttons/live3btn.svg';




const projects = [
  {
    title: 'HUMANO BARBER',
    description: 'Diseñado para una barberia',
    img: humano,
    techs: 'REACT - SASS',
    git: 'https://github.com/CrisSaavedra/humano-barber-chile',
    live: 'https://master--humano-barber-demo.netlify.app/',
  },
  {
    title: 'THE WEATHER',
    description: '¿Frio o calor? asegúrate con esta app',
    img: weather,
    techs: 'REACT - TAILWIND',
    git: 'https://github.com/CrisSaavedra/The-simple-weather',
    live: 'https://the-simple-weather-csaave.netlify.app',
  },
  {
    title: 'Moviet',
    description: 'Busca y guarda tus películas favoritas :)',
    img: moviet,
    techs: 'REACT - NODE - BOOTSTRAP',
    git: 'https://github.com/CrisSaavedra/Moviet',
    live: 'https://moviet.onrender.com',
  },

]


export const Projects = () => {

  return (
    <div id='projects' className="projects-container">
      <div className='title-project'>
        <div className='line'></div>
        <h3><span>P</span>royectos</h3>
      </div>

      {
        projects.map(project => {
          return (
            <div key={project.git} className="display-projects">
              <img className='screen' src={project.img} alt={project.description} />
              <div className='text-container'>
                <div className='text-project'>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <p className='techs-use'>{project.techs}</p>
                </div>
                <div className='btn-project'>
                  <a href={project.git} target="_blank"><img src={gitHub} alt="github logo" width={20} />GITHUB</a>
                  <a href={project.live} target="_blank"><img src={live} alt="live logo" width={28} />LIVE</a>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
