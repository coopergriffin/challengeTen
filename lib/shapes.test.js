

const Triangle = require('./Triangle');

describe('Triangle', () => {
  it('should render correctly with specified color', () => {
    const shape = new Triangle();
    shape.setColor('blue');

    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    const actualSVG = shape.render();

    expect(actualSVG).toEqual(expectedSVG);
  });

  // Add more tests as needed for other functionalities of the Triangle class
});