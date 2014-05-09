module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'spec/viewAPI/**/*.js'
    ],
    preprocessors: {
      'spec/viewAPI/**/*.js': ['browserify']
    },
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [process.env.TRAVIS ? 'Firefox' : 'PhantomJS'],
    captureTimeout: 20000,
    singleRun: false,
    reportSlowerThan: 500,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-browserify'
    ],
    browserify: {
      watch: true
    }
  });
};