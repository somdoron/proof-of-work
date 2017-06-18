'use strict';

const assert = require('assert');
const crypto = require('crypto');
const Buffer = require('buffer').Buffer;

const pow = require('../');
const utils = pow.utils;
const Solver = pow.Solver;

describe('POW/Solver', () => {
  let solver = new Solver();

  const check = (complexity) => {
    const nonce = solver.solve(complexity);
    const hash = crypto.createHash('sha256').update(nonce).digest();
    assert(utils.checkComplexity(hash, complexity));
  };

  it('should find nonce with complexity=0', () => {
    check(0);
  });

  it('should find nonce with complexity=3', () => {
    check(3);
  });

  it('should find nonce with complexity=8', () => {
    check(8);
  });

  it('should find nonce with complexity=12', () => {
    check(12);
  });
});
