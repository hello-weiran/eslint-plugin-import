/**
 * unopinionated config. just the things that are necessarily runtime errors
 * waiting to happen.
 * @type {Object}
 */
const { rules } = require('../lib/index');

module.exports = {
  plugins: { import: rules },
  rules: { 'import/no-unresolved': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
  },
};
