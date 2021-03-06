#  Professional README Generator

## Description
README markdown files. A node.js application that uses user input from inquirer to populate a README.md file for the user repository. By using this app, you can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.it is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package].
The application will be invoked by using the following command:

```bash
node index.js
```
##  User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Installation
The README generator requires installation of Node.js. Users must also have access to an IDE such as Visual Studio Code with access to the terminal or access to GitBash/Command Line Interface to run Node. Inquirer npm must also be installed.

## Project-usage
Run the following command at the root of your project and answer the prompted questions:node index.js

## Mock-Up
![screenshot of readme-generator](/src/Screenshot%202022-03-04%20200413.png)
## Walk-through the video
https://watch.screencastify.com/v/OGGSVBXqi3wSvhioy3UW

# URL
[GITHUB URL of github repository](https://github.com/PROGRAMER122223/Professional-Readme-Repo)