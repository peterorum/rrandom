import React from 'react';
import ReactDOM from 'react-dom';

import Word from './components/word/word'

var Title = React.createClass({
  render: function() {
    return (
    <div className='rr-title'>
      <h1>{this.props.text}</h1>
    </div>
    );
  }
});

ReactDOM.render(
  <div className='container'>
    <div className='row'>
      <div className='col-xs-12 text-center'>
        <Title text='Random Word'/>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 text-center'>
        <Word/>
      </div>
    </div>
  </div>,
  document.getElementById('view')
);
