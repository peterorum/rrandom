import React from 'react';

var Title = React.createClass({
  render: function() {
    return (
    <div className="title">
        <h1>{this.props.text}</h1>
                        </div>
    );
  }
});

React.render(
  <Title text="Instagram photo viewer"/>,
  document.getElementById('container')
);
