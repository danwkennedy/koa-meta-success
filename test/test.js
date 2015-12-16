'use strict';

var chai = require('chai');
var assert = chai.assert;
var success = require('..');

describe('koa-meta-success', function describeSuccess() {

  it('should append the status for 200', function check200() {
      let context = {
        status: 201,
        state: {
          meta: {}
        }
      };

      // Bind context
      let generator = getMiddleware(context);

      // Incoming call
      generator.next();
      // Outgoing call
      generator.next();

      assert.property(context.state, 'meta');
      assert.equal(context.state.meta.status, 'success');
  });

  it('should do nothing if the status is 300', function check301() {
    let context = {
      status: 301,
      state: {
        meta: {}
      }
    };

    let generator = getMiddleware(context);

    generator.next();
    generator.next();

    assert.property(context.state, 'meta');
    assert.notProperty(context.state.meta, 'status');
  });

  it('should do nothing if the status is 400', function check400() {
    let context = {
      status: 404,
      state: {
        meta: {}
      }
    };

    let generator = getMiddleware(context);

    generator.next();
    generator.next();

    assert.property(context.state, 'meta');
    assert.notProperty(context.state.meta, 'status');
  });

  it('should do nothing if the status is 500', function check500() {
    let context = {
      status: 500,
      state: {
        meta: {}
      }
    };

    let generator = getMiddleware(context);

    generator.next();
    generator.next();

    assert.property(context.state, 'meta');
    assert.notProperty(context.state.meta, 'status');
  });

});

function getMiddleware(context) {
  return success.apply(context);
}
