import IMG1 from './assets/portfolio1.png'
import IMG2 from './assets/portfolio2.png'
import IMG3 from './assets/portfolio3.png'
import IMG4 from './assets/portfolio4.png'
import IMG5 from './assets/portfolio5.png'
import IMG6 from './assets/portfolio6.png'

const personalInfo = {
    name: "Pratik Soni",
    profession: 'Software Developer',
    institute: 'Indian Institute of Technology (BHU), Varanasi',
    about: ''
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
        title: "Comic Generator",
        githubLink: "https://github.com/PratikOfficiel/ComicGenerator",
        liveLink: "https://main--silver-swan-b7c197.netlify.app/"
    },
    {
        id:2,
        imgLink:IMG2,
        title: "Notes On Blockchain",
        githubLink: "https://github.com/PratikOfficiel/NotesOnBlockchain",
        liveLink: "https://github.com/PratikOfficiel/NotesOnBlockchain"
    },
    {
        id:3,
        imgLink:IMG3,
        title: "ContactBook",
        githubLink: "https://github.com/PratikOfficiel/ContactBook",
        liveLink: "https://vocal-sunflower-770480.netlify.app/"
    },
    {
        id:4,
        imgLink:IMG4,
        title: "Random Quote Generator",
        githubLink: "https://github.com/PratikOfficiel/RandomQuoteGenerator",
        liveLink: "https://master--comfy-syrniki-03b859.netlify.app/"
    },
    {
        id:5,
        imgLink:IMG5,
        title: "Nested Comments",
        githubLink: "https://github.com/Pratik01-git/NComment",
        liveLink: "www.github.com"
    },
    {
        id:6,
        imgLink:IMG6,
        title: "Portfolio Website",
        githubLink: "https://github.com/PratikOfficiel/Portfolio",
        liveLink: "https://stalwart-dolphin-440902.netlify.app/"
    },
];

export {personalInfo, projects, SKILLS};