const _ = require("underscore");
const testRunnerConfig = require('test-runner-config');
const unitTestRunnerConfig = require("./.unitTestRunnerConfig.js");

const wallabyFiles = testRunnerConfig.getWallabyFiles(unitTestRunnerConfig.files);
const _processorConfig = {
  preprocessors: {
    '**/*.js': file => require('babel').transform(file.content, {
      sourceMap: true,
      blacklist: ["useStrict"],
    }),
  },
  env: {
    type: 'node',
  }
};

const setup = {
  setup: function () {
    global.React = require('react/dist/react-with-addons');
    global.expect = require('expect');
    global.mount = require('enzyme').mount;
    global.shallow = require('enzyme').shallow;
    global.stubs = {
      meteor: {
        Meteor: {
          call: () => {
          }
        },
      },
    };
  }
};

const _config = _.extend({}, wallabyFiles, _processorConfig, setup);
module.exports = function () {
  return _config;
};
