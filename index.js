'use strict';

module.exports = function *success(next) {
    yield next;
    if (this.status >= 200 && this.status < 300) {
      this.state.meta.status = 'success';
    }
};
