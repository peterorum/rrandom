jest.dontMock('../../constants/random-constants');
jest.dontMock('../../constants/random-words');
jest.dontMock('../random-store');

describe('RandomStore', function() {

  var RandomConstants = require('../../constants/random-constants');
  var AppDispatcher;
  var RandomStore;
  var callback;

  // mock actions
  var actionRandomSetWord = {
    actionType: RandomConstants.SET_WORD
  };

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/random-dispatcher');
    RandomStore = require('../random-store');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with a word', function() {
    var word = RandomStore.getWord();
    expect(word.length > 0).toBeTruthy();
  });

  it('changes word', function() {
    var word1 = RandomStore.getWord();

    callback(actionRandomSetWord);

    var word2 = RandomStore.getWord();

    // some small chance of failing
    expect(word1 === word2).toBeFalsy();
  });

});
