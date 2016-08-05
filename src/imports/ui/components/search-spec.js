require('testdom')('<html><body></body></html>');

const proxyquireStrict = require('proxyquire').noCallThru();
const Search = proxyquireStrict(
  './search-component', {
    'meteor/meteor': stubs.meteor
  }
);
// const meteorCallSpy = expect.spyOn(stubs.meteor.Meteor, 'call');

describe('Appointment', function () {
  beforeEach(() => {
    Component = mount(<Search />);
  });
  describe('render', function () {
    it('should ', function () {
    });
  });
});
