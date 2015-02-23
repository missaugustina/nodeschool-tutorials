var _ = require("underscore");

//console.log(process.argv);
var args = _.map(process.argv.slice(2), function(x) { return Number(x); });
var sum = _.reduce(args, function(memo, x){ return memo + x; }, 0);

console.log(sum);
