var AppDispatcher = require('../dispatcher/random-dispatcher');
var RandomConstants = require('../constants/random-constants');

var RandomActions = {

  setWord: function() {
    AppDispatcher.dispatch({
      actionType: RandomConstants.SET_WORD
    });
  }
};

module.exports = RandomActions;
