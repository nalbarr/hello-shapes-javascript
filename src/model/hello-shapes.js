import squareLogic from './square-logic';
import triangleLogic from './triangle-logic';

export class Shape {
  constructor (name) {
    this._name = name;
  }
  get name () {
    return this._name;
  }
}

export class Square extends Shape {
  constructor (name, side) {
    super(name);
    this._side = side;
  }
  getArea () {
    return squareLogic.area(this._side);
  }
}

export class Triangle extends Shape {
  constructor (name, base, height) {
    super(name);
    this._base = base;
    this._height = height;
  }
  getArea () {
    return triangleLogic.area(this._base, this._height);
  }
}

// NAA. needed to add export to class definitions, below does not work?
//export class square { Square }
//export class triangle { Triangle }