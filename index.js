// Include required packages for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Import the generateMarkdown function from the generateMarkdown.js file
const generateMarkdown = require("./generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project:",
    validate: (input) => (input.trim() === "" ? "This field is required." : true),
  },
  {
    type: "input",
    name: "description",
    message: "What's the description for your project:",
    validate: (input) => (input.trim() === "" ? "This field is required." : true),
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions:",
    default: "No specific installation at the moment.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the intended usage of your project:",
    default: "No specific usage at the moment.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project:",
    default: "No specific contribution guidelines at the moment.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter details about the tests for your project:",
    default: "No specific tests at the moment.",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: [ "Apache 2.0", "MIT", "MPL-2.0", "ISC", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:",
    validate: (input) => (input.trim() === "" ? "This field is required." : true),
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: (input) => (input.trim() === "" ? "This field is required." : true),
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} generated successfully!`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}

// Call the init() function to start the application
init();






// // TODO: Include packages needed for this application
// const fs = require("fs");
// const inquirer = require("inquirer");

// const generateMarkdown = require("./generateMarkdown");

// // TODO: Create an array of questions for user input
// const questions = [
// {
//     type: "input",
//     name: "title",
//     message: "What is the title of your project:",
//     validate: function (input) {
//     if (input.trim() === "") {
//         return "This field is required.";
//     }
//     return true;
//     },
// },
// {
//     type: "input",
//     name: "description",
//     message: "Whats the description for your project:",
//     validate: function (input) {
//     if (input.trim() === "") {
//         return "This field is required.";
//     }
//     return true;
//     },
// },
// {
//     type: "input",
//     name: "installation",
//     message: "What are the instructions:",
//     default: "No specific installation at the moment.",
// },
// {
//     type: "input",
//     name: "usage",
//     message: "Enter the intended usage of your project:",
//     default: "No specific usage at the moment.",
// },
// {
//     type: "input",
//     name: "contributing",
//     message: "Please provide contribution guidelines for your project:",
//     default: "No specific contribution guidlines at the moment.",
// },
// {
//     type: "input",
//     name: "tests",
//     message: "Please enter details about the tests for your project:",
//     default: "No specific tests at the moment.",
// },
// {
//     type: "list",
//     name: "license",
//     message: "Select a license for your project:",
//     choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "None"],
// },
// {
//     type: "input",
//     name: "username",
//     message: "Please enter your GitHub username:",
//     validate: function (input) {
//     if (input.trim() === "") {
//         return "This field is required.";
//     }
//     return true;
//     },
// },
// {
//     type: "input",
//     name: "email",
//     message: "Please enter your email address:",
//     validate: function (input) {
//     if (input.trim() === "") {
//         return "This field is required.";
//     }
//     return true;
//     },
// },
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// fs.writeFile(fileName, data, (err) => {
//     if (err) {
//     console.error(err);
//     } else {
//     console.log(`${fileName} generated successfully!`);
//     }
// });
// }

// // TODO: Create a function to initialize app
// function init() {
// inquirer.prompt(questions).then((answers) => {
//     const markdoownContent = generateMarkdown(answers);

//     writeToFile("README.md", markdoownContent);
// });
// }

// // Function call to initialize app
// init();
