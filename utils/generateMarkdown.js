// Packages installed to run this application
import fs from 'fs';

// Function that creates a License badge at the top of the README file
let license;
export function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';}
  let licenseLink = encodeURIComponent(license);
  return `![Static Badge](https://img.shields.io/badge/License-${licenseLink}-blue)`;
}

// Function that creates a License link alongside the README file
let username;
export function renderLicenseLink(license, username) {
  if (license !== 'No License') {
    fs.writeFile('License.md', `${license}

Copyright (c) 2024 ${username}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`, 
    (err) => err ? console.error(err) : console.log('License Created!'));
  } else {
    return;
  }
}

// Function that creates a markdown template for the data input by the prompts
function generateMarkdown(data) {
  renderLicenseLink(data.license, data.username);
  return `${renderLicenseBadge(data.license)}
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
## Installation
${data.install}
## Usage
${data.usage}
## Credits
${data.credits}
## License
This project is licensed under the terms of the ${data.license}.
## Features
${data.features}
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
Have questions? Visit [my GitHub profile](https://github.com/${data.username}) and [my email](mailto:${data.email}).`;
}

export default generateMarkdown;