// Packages installed to run this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown.js';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions that are prompted to create the README file
const questions = [
    'What is the Title of your Project?',
    'Provide a short Description of your Project',
    'Are there specific Installation instructions?',
    'Please provide instructions and examples for Usage',
    'Are there any other collaborators you would like to Credit?',
    'Would you like to add a License?',
    'Are there any Features you would like to include?',
    'How can others Contribute?',
    'Are there any tests you would like to run?',
    'What is your GitHub username for people to check out your repo?',
    'What is your email for people to contact you?'
];

// Function that created a Markdown file from the prompt responses
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// Function that initializes the prompts
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
                type: 'list',
                name: 'license',
                message: `${questions[5]}`,
                choices: ['None', 
                        'Apache License 2.0', 
                        'GNU General Public License v3.0', 
                        'MIT License', 
                        'BSD 2-Clause "Simplified"', 
                        'BSD 3-Clause "New" or "Revised" License',
                        'Boost Software License 1.0',
                        'Creative Commons Zero v1.0',
                        'Eclipse Public License 2.0',
                        'GNU Affero General Public License v3.0',
                        'GNU General Public License v2.0',
                        'GNU Lesser General Public License v2.1',
                        'Mozilla Public License 2.0',
                        'The Unlicense',
                    ],
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
            {
                type: 'input',
                name: 'username',
                message: `${questions[9]}`,
            },
            {
                type: 'input',
                name: 'email',
                message: `${questions[10]}`,
            },
        ])
        .then((response) => {
            writeToFile('README_Sample.md', response);
        });
}

// Calling the initialization function
init();
