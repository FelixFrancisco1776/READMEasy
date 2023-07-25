function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    case "MPL-2.0":
      return "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-green.svg)]https://opensource.org/license/mpl-2-0/)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)";
    default:
      return ""; // Empty string for 'None' license
  }
}


function renderLicenseLink(license) {
  switch (license) {

    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "MPL-2.0":
      return "https://opensource.org/license/mpl-2-0/";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return ""; // Empty string for 'None' license
  }
}
// ------------------------------------------------------------------------------------------------------------------------------



function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License

This project is licensed under the [${license}](LICENSE) License.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
${renderLicenseSection(data.license)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions or feedback, please feel free to contact me:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
