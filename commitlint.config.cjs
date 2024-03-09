/* eslint-disable */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => /\[skip ci\]/i.test(message)]
};
