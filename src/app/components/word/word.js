import React from 'react';

var Word = React.createClass({

  getInitialState : function() {
    return {
      word: 'fish'
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
