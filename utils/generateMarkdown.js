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
export function renderLicenseLink(license) {
  if (license === 'No License') {
    return '';
  }
  switch (license) {
    case 'Apache License 2.0':
      license = 'https://www.apache.org/licenses/LICENSE-2.0'
      return license;
    case 'GNU General Public License v3.0':
      license = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
      return license;
    case 'MIT License':
      license = 'https://opensource.org/license/mit'
      return license;
    case 'BSD 2--Clause Simplified':
      license = 'https://choosealicense.com/licenses/bsd-2-clause/'
      return license;
    case 'BSD 3--Clause New or Revised License':
      license = 'https://opensource.org/license/bsd-3-clause'
      return license;
    case 'Apache License 2.0Boost Software License 1.0':
      license = 'https://www.boost.org/LICENSE_1_0.txt'
      return license;
    case 'Creative Commons Zero v1.0':
      license = 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
      return license;
    case 'Eclipse Public License 2.0':
      license = 'https://www.eclipse.org/legal/epl-2.0/'
      return license;
    case 'GNU Affero General Public License v3.0':
      license = 'https://www.gnu.org/licenses/agpl-3.0.en.html'
      return license;
    case 'GNU General Public License v2.0':
      license = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
      return license;
    case 'GNU Lesser General Public License v2.1':
      license = 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html'
      return license;
    case 'Mozilla Public License 2.0':
      license = 'https://www.mozilla.org/en-US/MPL/2.0/'
      return license;
    case 'Unlicense':
      license = 'https://choosealicense.com/licenses/unlicense/'
      return license;
  }
}

export function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)}`;
}

// Function that creates a markdown template for the data input by the prompts
function generateMarkdown(data) {
  return `${renderLicenseSection(data.license)}
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