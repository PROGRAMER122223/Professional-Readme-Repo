//Declaring dependencies and variables
const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {

  return inquirer.prompt([
    {
      type: "input",
      name: "ProjectTitle",
      message: "what is the Project title?"

    },
    {
      type: "input",
      name: "Description",
      message: "Write brief description of  the Project:"

    },

    {
      type: "input",
      name: "Installation",
      message: "Write about installation if any: "

    },
    {
      type: "input",
      name: "Usage",
      message: "what is this project usage for?"

    },
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
    {
      type: "input",
      name: "Contributors",
      message: "who are the contributers of this project?"


    },
    {
      type: "input",
      name: "Test",
      message: "is there a test included?"

    },
    {
      type: "input",
      name: "username",
      message: "please enter the github username: "

    },
    {
      type: "input",
      name: "email",
      message: "please enter your email: "

    }

  ]);
}

function generateReadme(answer) {
  return `# ${answer.ProjectTitle}
  ## license 
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
init();


