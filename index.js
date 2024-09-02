// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown';
import generateMarkdown from './utils/generateMarkdown';
import badge-maker from 'badge-maker';
// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of your Project?',
    'Provide a short Description of your Project',
    'Would you like to add a Table of Contents?',
    'Please provide instructions and examples for Usage',
    'Are there any other collaborators you would like to Credit?',
    'Would you like to add a License?',
    'Add a Badge?',
    'Are there any Features you would like to include?',
    'How can others Contribute?',
    'Are there any example Tests you woud like to have the user run?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    for (i = 0, i < questions.length, i++) {
        .prompt ([{
            type = 'input',
            message = `${questions[i]}`,
        }])
    }
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
