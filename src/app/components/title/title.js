import React from 'react';

var Title = React.createClass({
  render: function() {
    return (
    <div className='rr-title'>
      <h1>{this.props.text}</h1>
    </div>
    );
  }
});

export default Title;
