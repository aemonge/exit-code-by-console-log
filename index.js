const __consoles = {
  error: console.error,
  log: console.log
};
console.error = function() {
  __consoles.error.apply(console, arguments);
  process.exitCode = 1;
};
console.log = function() {
  __consoles.log.apply(console, arguments);
  process.exitCode = 0;
};
