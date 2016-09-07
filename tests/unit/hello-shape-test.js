/* eslint no-process-env:0 */
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {Square, Triangle} from '../../src/model/hello-shapes';

describe('Square', () => {
  const square1 = new Square('square1', 2.0);

  it('should return correct name', () => {
    expect(square1.name).to.equal('square1');
  });
  it('should compute correct area', () => {
    expect(square1.getArea()).to.equal(4.0);
  });
});

describe('Triangle', () => {
  const triangle1 = new Triangle('triangle1', 2.0, 2.0);

  it('should return correct name', () => {
    expect(triangle1.name).to.equal('triangle1');
  });
  it('should compute correct area', () => {
    expect(triangle1.getArea()).to.equal(2.0);
  });
});
