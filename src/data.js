import IMG1 from './assets/portfolio1.jpg'
import IMG2 from './assets/portfolio2.jpg'
import IMG3 from './assets/portfolio3.jpg'
import IMG4 from './assets/portfolio4.jpg'
import IMG5 from './assets/portfolio5.png'
import IMG6 from './assets/portfolio6.jpg'

const personalInfo = {
    name: "Pratik Soni",
    profession: 'Software Developer',
    institute: 'Indian Institute of Technology (BHU), Varanasi',
    about: 'dhinka falana bakchodi abhi ke liye'
}

const SKILLS = {
    coding:[
        {
            "C++": 'Expert'
        },
        {
            "Data Structures & Algorithm": 'Expert'
        },
        {
            "Problem Solving": 'Expert'
        },
        {
            "Object Oriented Programming": 'Intermediate'
        },
        {
            "System Design": 'Basic'
        },
        
    ],
    frontend:[
        {"HTML": "Intermediate"},
        {"CSS": "Intermediate"},
        {"Vanilla Js (ES6+)": "Advanced"},
        {"React": "Advanced"},
        {"Redux": "Intermediate"},
        {"Tailwind": "Basic"}
    ],
    backend:[
        {"Node JS": "Expert"},
        {"Express": "Intermediate"},
        {"MongoDB": "Basic"},
        {"MYSQL": "Basic"},
        {"Python": "Basic"}
    ],
}

const projects = [
    {
        id:1,
        imgLink: IMG1,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
    {
        id:2,
        imgLink:IMG2,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
    {
        id:3,
        imgLink:IMG3,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
    {
        id:4,
        imgLink:IMG4,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
    {
        id:5,
        imgLink:IMG5,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
    {
        id:6,
        imgLink:IMG6,
        title: "First Project",
        githubLink: "www.github.com",
        liveLink: "www.github.com"
    },
];

export {personalInfo, projects, SKILLS};