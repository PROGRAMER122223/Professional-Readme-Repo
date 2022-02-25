//Declaring dependencies and variables
const inquirer = require("inquirer");//provides functionality to prompt question
const fs = require("fs");//interacting with the file system

function promptUser() {
  //provides functionality to prompt function
  //project title 
  return inquirer.prompt([
    {
      type: "input",
      name: "ProjectTitle",
      message: "what is the Project title?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a title to continue!');
          return false;
        }
      }
    },
    // project description  
    {
      type: "editor",//allows users to use their default text editor for larger text inputs
      name: "Description",
      message: "Write brief description of  the Project:",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a  project description!');
          return false;
        }
      }
    },
    // project installation
    {
      type: "input",
      name: "Installation",
      message: "Write about installation if any: ",
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('please enter about installation process!');
          return false;
        }
      }
    },
    // project usage
    {
      type: "input",
      name: "Usage",
      message: "what is this project usage for?",
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You need to enter about usage of project!');
          return false;
        }
      }
    },
    // License 
    {
      type: "list",
      name: "License",
      message: "choose the license for this project:",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    //project contributors
    {
      type: "input",
      name: "Contributors",
      message: "who are the contributers of this project?",
      validate: contInput => {
        if (contInput) {
          return true;
        } else {
          console.log('You need to enter about  project contributors!');
          return false;
        }
      }
    },
    //Test
    {
      type: "input",
      name: "Test",
      message: "is there a test included?"
    },
    //github username
    {
      type: "input",
      name: "username",
      message: "please enter the github username: ",
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('You need to enter a  github username!');
          return false;
        }
      }
    },
    //E-mail
    {
      type: "input",
      name: "email",
      message: "please enter your email: ",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('please enter your e-mail');
          return false;
        }
      }

    }

  ]);
}

function generateReadme(answer) {
  return `# ${answer.ProjectTitle}
  
  ## License 
  [![license](https://img.shields.io/badge/license-${answer.License}-blue)](https://shields.io)

  #### Table of Contents
   1.[Projrct-description](#Description)

   2.[Project-installation](#Installation)

   3.[Usage](#Usage)

   4.[License-used](#License)

   5.[Project-contributors](#Contributors)

   6.[Project-test](#Test)

   7.[Questions](#questions)

   ## Project-description
   * ${answer.Description}

  
   ## Project-installation
   * ${answer.Installation}
   
   ## Usage
   * ${answer.Usage}
   
   ## License
   * ${answer.License}
   
   ## Project-contributors
   * ${answer.Contributors}

   ## Project-test
   *  ${answer.Test}

   ## Questions
   * For additional help or questions about collaboration, please reach out to ${answer.email}
   * Follow me on Github at [${answer.username}](http://github.com/${answer.username})`;
}

// function to initialize app and write file
function init() {
  promptUser()
    .then(function (answers) {
      const readme = generateReadme(answers);
      return fs.writeFileSync("README.md", readme);
      //return fs.writeFileSync("README.md", generateMarkdown(answers));
    })
    .then(function () {
      console.log(" README.md has been created!");
    })
    .catch(function (err) {
      console.log(err);
    });

}
//function call to initialise 
init();


