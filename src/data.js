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
    about: `I'm a tech enthusiast who graduated from IIT BHU in Engineering Physics and has spent 7 months working in the industry. During college, I got my hands dirty with everything from building websites to quantum computing, working with tools like Python, MERN stack, and C++. These days, I'm really into system design and building clean, efficient code – you know, the kind that makes other developers smile. I'm a quick learner who loves solving real problems, not just theoretical ones. Looking to join a team where I can put my skills to work on exciting challenges and make something that matters.`
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
            link: "https://leetcode.com/u/Patrick_Sinova/"
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
            "Object Oriented Programming": 'Advanced'
        },
        {
            "System Design": 'Advanced'
        },
        {
            "Blockchain Development": "Intermediate"
        }
        
    ],
    frontend:[
        {"HTML": "Intermediate"},
        {"CSS": "Intermediate"},
        {"Vanilla Js (ES6+)": "Expert"},
        {"React": "Intermediate"},
        {"Redux": "Intermediate"},
        {"Tailwind": "Basic"}
    ],
    backend:[
        {"Node JS": "Expert"},
        {"Express": "Intermediate"},
        {"Motoko": "Intermediate"},
        {"MongoDB": "Basic"},
        {"MYSQL": "Intermediate"},
        {"Python": "Basic"}
    ],
}

const projects = [
    {
        id:1,
        imgLink: IMG1,
        title: "VlogVista",
        githubLink: "https://github.com/PratikOfficiel/VlogVista",
        liveLink: ""
    },
    {
        id:2,
        imgLink:IMG2,
        title: "Quiz App",
        githubLink: "https://github.com/PratikOfficiel/QuizApp",
        liveLink: "https://elaborate-semifreddo-547a67.netlify.app/"
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
        title: "Tic Tac Toe",
        githubLink: "https://github.com/PratikOfficiel/TicTacToe",
        liveLink: "https://helpful-marshmallow-7ceaa7.netlify.app/"
    },
    {
        id:5,
        imgLink:IMG5,
        title: "NFT marketplace",
        githubLink: "https://github.com/PratikOfficiel/NFT-Marketplace",
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