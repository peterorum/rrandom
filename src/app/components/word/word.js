import React from 'react';
import Words from './Words';

function getWord() {
  return Words[Math.floor(Math.random() * Words.length)];
}

var Word = React.createClass({

  getInitialState: function() {
    return {
      word: getWord()
    };
  },
  render: function() {
    return (
    <div className='rr-word'>
      {this.state.word}
    </div>
    );
  }
});

export default Word;
