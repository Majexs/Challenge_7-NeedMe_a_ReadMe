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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([{
                type: 'input',
                name: 'title',
                message: `${questions[0]}`,
            },
            {
                type: 'input',
                name: 'description',
                message: `${questions[1]}`,
            },
            {
                type: 'input',
                name: 'install',
                message: `${questions[2]}`,
            },
            {
                type: 'input',
                name: 'usage',
                message: `${questions[3]}`,
            },
            {
                type: 'input',
                name: 'credits',
                message: `${questions[4]}`,
            },
            {
                type: 'input',
                name: 'license',
                message: `${questions[5]}`,
            },
            {
                type: 'input',
                name: 'features',
                message: `${questions[6]}`,
            },
            {
                type: 'input',
                name: 'contribute',
                message: `${questions[7]}`,
            },
            {
                type: 'input',
                name: 'tests',
                message: `${questions[8]}`,
            },
        ])
        .then((response) => {
            writeToFile('README_Sample.md', response);
        });
}

// Function call to initialize app
init();
