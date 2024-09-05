// TODO: Create a function that returns a license badge based on which license is passed in
// import { makeBadge, ValidationError } from 'badge-maker';

// If there is no license, return an empty string
let license;
export function renderLicenseBadge(license) {
  let licenseLink = license.replaceAll(' ', '%20');
  if (licenseLink) {
    return `![Static Badge](https://img.shields.io/badge/License-${licenseLink}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}
## Description\n${data.description}
## Table of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[Credits](#credits)\n
[License](#license)\n
[Features](#features)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
## Installation\n${data.install}
## Usage\n${data.usage}
## Credits\n${data.credits}
## License\n${data.license}
## Features\n${data.features}
## Contributing\n${data.contribute}
## Tests\n${data.tests}
## Questions\nHave questions? Here is my GitHub profile: https://github.com/${data.username} and my email: ${data.email}`;
}

export default generateMarkdown;