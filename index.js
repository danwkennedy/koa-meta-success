module.exports = async function success(ctx, next) {
  await next();
  if (ctx.response.status >= 200 && ctx.response.status < 300) {
    ctx.state.meta.status = 'success';
  }
};
