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
    about: 'I am a versatile Full Stack Developer with an emphasis on backend programming. I am adept in competitive programming with a robust understanding of Data Structures and Algorithms.'
}

// Only any 3 are enough

const achievements = {
    profiles:[
        {
            name: "Codeforces",
            link: "https://codeforces.com/profile/Valkov"
        },
        {
            name: "Leetcode",
            link: "https://leetcode.com/SouLPegasuS/"
        }
    ],

    certificates:[
        {
            name: "Hackerrank",
            link: "https://www.hackerrank.com/profile/s_pratikcr929"
        },
        {
            name: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/spratik929/javascript-algorithms-and-data-structures"
        }
    ]
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
        {
            "Blockchain Development": "Intermediate"
        }
        
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
        {"Motoko": "Intermediate"},
        {"MongoDB": "Basic"},
        {"MYSQL": "Basic"},
        {"Python": "Basic"}
    ],
}

const projects = [
    {
        id:1,
        imgLink: IMG1,
        title: "NFT marketplace",
        githubLink: "https://github.com/PratikOfficiel/NFT-Marketplace",
        liveLink: ""
    },
    {
        id:2,
        imgLink:IMG2,
        title: "Notes On Blockchain",
        githubLink: "https://github.com/PratikOfficiel/NotesOnBlockchain",
        liveLink: ""
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
        title: "Crypto Token",
        githubLink: "https://github.com/PratikOfficiel/CryptoToken",
        liveLink: ""
    },
    {
        id:5,
        imgLink:IMG5,
        title: "Nested Comments",
        githubLink: "https://github.com/Pratik01-git/NComment",
        liveLink: ""
    },
    {
        id:6,
        imgLink:IMG6,
        title: "Portfolio Website",
        githubLink: "https://github.com/PratikOfficiel/Portfolio",
        liveLink: "https://stalwart-dolphin-440902.netlify.app/"
    },
];

export {personalInfo, projects, SKILLS, achievements};