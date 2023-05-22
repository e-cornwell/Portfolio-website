import NoxWebpageCover from "../img/projectCovers/NoxWebpageCover.png";
import StrangersThingsCover from "../img/projectCovers/StrangersThingsCover.png";
import SnakeSnackinImg from "../img/projectCovers/SnakeSnackinImg.png";

const projectList = [
  {
    id: "01",
    img: NoxWebpageCover,
    title: "Nox Capstone Project",
    description:
      "The Nox Capstone project, my final assignment in the Web Development bootcamp, involved collaborating with my fellow peers, Michael and Walter. Together, we designed an ecommerce PC parts store website. Utilizing GitHub project boards, we effectively tracked requirements and progress. Our implementation included SQL database functions, Express, and Express Router for the server and API middleware, following the CRUD model. We built React components and fetch API functions to facilitate communication with the server and database. Finally, we styled the website using CSS. This project provided invaluable insights into ecommerce website structure and web development as a whole.",
    technologies: [
      "JavaScript",
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Bcrypt",
      "AJAX",
      "API",
      "JWT",
    ],
    gitURL: "https://github.com/Nox-Capstone/Capstone-Project",
    siteURL: "https://nox-capstone.onrender.com",
  },
  {
    id: "02",
    img: StrangersThingsCover,
    title: "Strangers Things",
    description:
      "Designed as a Craigslist lite prototype, this frontend web application uses fetch API to consume a host API using CRUD (Create, Read, Update, Destroy) to write the functions necessary to perform actions such as registration, login, posting a product, deleting and editing a product, and more.",
    technologies: [
      "JavaScript",
      "Express.js",
      "React.js",
      "Node.js",
      "fetch API",
      "API",
      "AJAX",
      "JWT",
    ],
    gitURL: "https://github.com/e-cornwell/strangers_V2",
    siteURL: "https://lighthearted-frangollo-38ec53.netlify.app",
  },
  {
    id: "03",
    img: SnakeSnackinImg,
    title: "Snake Snackin'",
    description:
      "The first game I developed in JavaScript, based off the iconic 'Snake' game. Project goal to demonstrate mastery of JavaScript variable declaration, loop usage, control structures, function declaration and invocation, usage of data types including arrays and objects and DOM manipulation (templating & rendering, element queries and events).",
    technologies: ["JavaScript", "HTML", "CSS"],
    gitURL: "https://github.com/e-cornwell/Arcade-Project",
    siteURL: "https://jazzy-frangipane-423deb.netlify.app",
  },
];

export default projectList;
