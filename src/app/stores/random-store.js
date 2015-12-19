var AppDispatcher = require('../dispatcher/random-dispatcher');
var EventEmitter = require('events');
var RandomConstants = require('../constants/random-constants');
var assign = require('object-assign');
var Words = require('../constants/random-words');

var _word = '';

var CHANGE_EVENT = 'change';

function setWord() {

    _word = Words[Math.floor(Math.random() * Words.length)];

}

var RandomStore = assign({}, EventEmitter.prototype, {

    getWord: function() {

        if (!_word) {
            setWord();
        }

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

    switch (action.actionType) {
        case RandomConstants.SET_WORD:
            setWord();
            RandomStore.emitChange();
            break;

        default:
    // no op
    }
});

module.exports = RandomStore;
