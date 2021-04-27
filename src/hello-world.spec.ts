import { expect } from 'chai';

import { Speaker } from './hello-world';

describe('Speaker tests', () => {
  it('should say hello', () => {
    const result = new Speaker().sayHello();
    expect(result).to.equal('hello');
  })
})

