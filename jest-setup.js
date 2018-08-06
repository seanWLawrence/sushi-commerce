let reactTestingLibrary = require('react-testing-library');

global.render = reactTestingLibrary.render;
global.Simulate = reactTestingLibrary.Simulate;
global.fetch = require('jest-fetch-mock');
global.window.alert = jest.fn('alert function');
global.graphql = () => {};
