import { expect } from 'chai';

import { YourClass, yourFunction } from './hello-world';

describe('YourClass tests', () => {
  it('should say hello', () => {
    const result = new YourClass().sayHello();
    expect(result).to.equal('hello');
  })
})

describe('yourFunction tests', () => {
  it('should say goodbye', () => {
    const result = yourFunction();
    expect(result).to.equal('goodbye');
  })
})