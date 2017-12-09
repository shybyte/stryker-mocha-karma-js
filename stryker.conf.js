module.exports = function(config) {
  config.set({
    files: ['src/*.js', 'test/*.js'],
    mutate: ['src/*.js'],
    testRunner: "karma",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "baseline", "clear-text", "progress"],
    coverageAnalysis: "all",
    karmaConfigFile: "karma.conf.js"
  });
};
