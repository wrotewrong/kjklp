const Handlebars = require('handlebars');

Handlebars.registerHelper('notEqual', function (a, b, options) {
  if (a !== b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});

module.exports = Handlebars;
