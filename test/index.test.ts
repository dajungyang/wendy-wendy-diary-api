import { expect } from 'chai';
import { sum } from '../src';

describe('index.ts 테스트', () => {
  it('sum 테스트', () => {
    expect(sum(1, 1)).to.equal(2);
    expect(sum(1, 1)).to.not.equal('wendy');
  });
});