// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown.js';
import generateMarkdown from './utils/generateMarkdown.js';
import badge_maker from 'badge-maker';
// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of your Project?',
    'Provide a short Description of your Project',
    'Would you like to add a Table of Contents?',
    'Are there specific Installation instructions?',
    'Please provide instructions and examples for Usage',
    'Are there any other collaborators you would like to Credit?',
    'Would you like to add a License?',
    'Add a Badge?',
    'Are there any Features you would like to include?',
    'How can others Contribute?',
];

// Test Run
inquirer
    .prompt ([{
            type: 'input',
            message: `${questions[0]}`,
            name: 'title',
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'description',
        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'toc',
        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'installation',
        },
        {
            type: 'input',
            message: `${questions[4]}`,
            name: 'usage',
        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'credit',
        },
        {
            type: 'input',
            message: `${questions[6]}`,
            name: 'license',
        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'badge',
        },
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'features',
        },
        {
            type: 'input',
            message: `${questions[9]}`,
            name: 'contributions',
        },
    ])
    .then((response) =>
        fs.writeFile('READEME_Sample.md', `# ${response.title}\n## Description\n ${response.description}\n## Table of Contents\n ${response.toc}\n## Usage\n ${response.usage}\n`, (err) =>
            err ? console.error(err) : console.log('Commit logged!')),
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
