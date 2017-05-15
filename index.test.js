const success = require('.');

describe('koa-meta-success', function describeSuccess() {

  it('should append the status for 200', async function check200() {
    let context = {
      state: {
        meta: {}
      },
      response: { status: 201 }
    };

    await success(context, () => { });

    expect(context.state).toHaveProperty('meta', { status: 'success' });
  });

  it('should do nothing if the status is 300', async function check301() {
    let context = {
      state: {
        meta: {}
      },
      response: { status: 301 }
    };

    await success(context, () => { });

    expect(context.state.meta.status).toBeUndefined();
  });

  it('should do nothing if the status is 400', async function check400() {
    let context = {
      state: {
        meta: {}
      },
      response: { status: 404 }
    };

    await success(context, () => { });

    expect(context.state.meta.status).toBeUndefined();
  });

  it('should do nothing if the status is 500', async function check500() {
    let context = {
      state: {
        meta: {}
      },
      response: { status: 500 }
    };

    await success(context, () => { });

    expect(context.state.meta.status).toBeUndefined();
  });

});
