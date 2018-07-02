let reactTestingLibrary = require('react-testing-library')
let fetchMock = require('fetch-mock')

global.render = reactTestingLibrary.render
global.Simulate = reactTestingLibrary.Simulate
global.fetch = fetchMock.mock('*', 'Success')