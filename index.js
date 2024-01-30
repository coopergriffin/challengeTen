//Cooper Griffin 
//index file for project. 


//npm declaration 
const inquirer = require('inquirer');
const fs = require('fs');
//local libarary declarartion 
const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');


//Main/Starting function that get called 
async function generateLogo() {

  //User prompts. There are 4 prompts for the user
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const shape = getShape(userInput.shape);
  shape.setColor(userInput.shapeColor);

  //Creates svg contents and adds the user inptu
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
  		<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  		${shape.render()}
  		<text x="150" y="100" font-size="16" fill="${userInput.textColor}" text-anchor="middle" dominant-baseline="middle">${userInput.text}</text>
		</svg>`;

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}


//Takes the users input for shape type prompt and call the corresponding shape function. 
function getShape(shapeType) {
  switch (shapeType) {
    case 'circle':
      return new Circle();
    case 'triangle':
      return new Triangle();
    case 'square':
      return new Square();
    default:
      throw new Error('Invalid shape type');
  }
}


//Main function call 
generateLogo();
