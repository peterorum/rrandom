import AppDispatcher from '../dispatcher/random-dispatcher';
import EventEmitter from 'events';
import RandomConstants from '../constants/random-constants';
import assign from 'object-assign';
import Words from '../constants/random-words';

var _word = 'fish';

var CHANGE_EVENT = 'change';

function setWord() {

  _word = Words[Math.floor(Math.random() * Words.length)];

}

var RandomStore = assign({}, EventEmitter.prototype, {

  getWord: function() {
    return _word;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case RandomConstants.SET_WORD:
        setWord();
        RandomStore.emitChange();
        break;

    default:
      // no op
  }
});

module.exports = RandomStore;
