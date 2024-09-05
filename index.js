// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown.js';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of your Project?',
    'Provide a short Description of your Project',
    'Are there specific Installation instructions?',
    'Please provide instructions and examples for Usage',
    'Are there any other collaborators you would like to Credit?',
    'Would you like to add a License?',
    'Are there any Features you would like to include?',
    'How can others Contribute?',
    'Are there any tests you would like to run?'
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
    ])
    .then((response) => {
        fs.writeFile('README_Sample.md', `# ${response.title}\n`, (err) => err ? console.error(err) : console.log('Commit logged!'))
        fs.appendFile('README_Sample.md', `## Description\n${response.description}\n`, (err) => err ? console.error(err) : console.log('Commit logged!'))
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
