import React from 'react';

function Portfolio() {
    const projects =[
        {
            title: 'Life Sherpa',
            description: "Mentoring website where you can pass on your life's work and knowledge",
            github: 'https://github.com/crocket77/Aniverse',
            link: 'https://protected-escarpment-45805.herokuapp.com/',
            image: 'life_sherpa.bmp'
        },
        {
            title: 'Aniverse',
            description: "Anonymous social media app where you can personify your favorite anime characters.",
            github: 'https://github.com/crocket77/Aniverse',
            link: 'https://aniverse7.herokuapp.com/',
            image: 'aniverse.png'
        },
        {
            title: 'Pizza Hunt',
            description: "A Pizza ordering website where you can create pizzas and comment on pizzas created.",
            github: 'https://github.com/crocket77/pizza-hunt',
            link: 'https://pizza-tim.herokuapp.com/',
            image: 'pizza_hunt.png'
        },
        {
            title: 'Photo Port',
            description: "A Photo viewing site created with REACT.",
            github: 'https://github.com/crocket77/photo-port',
            link: 'https://crocket77.github.io/photo-port/',
            image: 'photo_port.png'
        },
        {
            title: 'Note Taker',
            description: "A retentive note taking application.",
            github: 'https://github.com/crocket77/note-taker',
            link: 'https://note-taker112.herokuapp.com/',
            image: 'note_taker.png'
        },
        {
            title: 'Food Festival',
            description: "A food festival application",
            github: 'https://github.com/crocket77/food-festival',
            link: 'https://crocket77.github.io/food-festival/',
            image: 'food_festival.png'
        },
        {
            title: 'Weather Monitor',
            description: "A weather monitoring application",
            github: 'https://github.com/crocket77/weather-monitor',
            link: 'https://crocket77.github.io/weather-monitor/',
            image: 'weather_monitor.png'
        },

    ]


    return(
        <div className = 'portfolio'>
            <h2>Web development portfolio</h2>
            <div className="flex-row port-container" >
                {projects.map((project, i) => (
                <>
                <div className="absolute project-header mx-1 my-1">
                <h4>{project.title}</h4>
                    <a href={project.link}  target='_blank' rel="noreferrer">
                    <img 
                        src={require(`../../assets/portfolio/${project.image}`)}
                        alt={project.title}
                        className="img-thumbnail w-100 h-100"
                        key={project.title}
                    />
                    </a>
                </div>
                </>   
                ))}
            </div>
        </div>
    )
}

export default Portfolio;