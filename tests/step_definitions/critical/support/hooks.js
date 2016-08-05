import {reset} from './fixtures/common';

module.exports = function () {
  this.Before(function () {
    reset();
  })
};
