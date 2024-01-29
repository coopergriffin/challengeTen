class Circle {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="150" r="75" fill="${this.color}" />`;
    }
  }
  
module.exports = Circle;
  