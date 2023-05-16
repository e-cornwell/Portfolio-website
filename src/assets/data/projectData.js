import NoxWebpageCover from "../img/projectCovers/NoxWebpageCover.png";
import StrangersThingsCover from "../img/projectCovers/StrangersThingsCover.png";
import SnakeSnackinImg from "../img/projectCovers/SnakeSnackinImg.png";

const projectList = [
    {
        id: "01",
        img: NoxWebpageCover,
        title: "Nox Capstone Project",
        description: "Talk about the tech",
        technologies: ["JavaScript", "PostgreSQL", "Express.js", "React.js", "Node.js", "Bcrypt", "AJAX", "API", "JWT"],
        gitURL: "https://github.com/Nox-Capstone/Capstone-Project",
        siteURL: "https://nox-capstone.onrender.com",
    },
    {
        id: "02",
        img: StrangersThingsCover,
        title: "Strangers Things",
        description: "Designed as a Craigslist lite prototype, this frontend web application uses fetch API to consume a host API through CRUD (Create, Read, Update, Destroy) to write the nessesary functions  .",
        technologies: ["JavaScript", "Express.js", "React.js", "Node.js", "fetch API", "API", "AJAX", "JWT"],
        gitURL: "https://github.com/e-cornwell/strangers_V2",
        siteURL: "https://lighthearted-frangollo-38ec53.netlify.app",
    },
    {
        id: "03",
        img: SnakeSnackinImg,
        title: "Snake Snackin'",
        description: "The first game I developed in JavaScript based off the iconic 'Snake' game. Project goal to demonstrate mastery of JavaScript variable declaration, loop usage, control structures, function declaration and invocation, usage of data types including arrays and objects and DOM manipulation (templating & rendering, element queries and events).",
        technologies: ["JavaScript", "HTML", "CSS"],
        gitURL: "https://github.com/e-cornwell/Arcade-Project",
        siteURL: "https://jazzy-frangipane-423deb.netlify.app",
    },
];

export default projectList;

