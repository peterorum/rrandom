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
  getAnother: function() {
    this.setState({
      word: getWord()
    });
  },
  render: function() {
    return (
    <div>
      <div className='rr-word'>
        {this.state.word}
      </div>
      <div className='rr-button'>
        <button className='btn btn-primary btn-lg' onClick={this.getAnother}>another</button>
      </div>
    </div>
    );
  }
});

export default Word;
