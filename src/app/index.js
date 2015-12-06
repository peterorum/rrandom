import React from 'react';
import ReactDOM  from 'react-dom';

var Title = React.createClass({
  render: function() {
    return (
    <div className="title">
      <h1>{this.props.text}</h1>
    </div>
    );
  }
});

ReactDOM.render(
  <Title text="Random word"/>,
  document.getElementById('view')
);
