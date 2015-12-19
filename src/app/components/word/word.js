var React = require('react');
var RandomActions = require('../../actions/random-actions');

var ReactPropTypes = React.PropTypes;

var Word = React.createClass({

  propTypes: {
    word: ReactPropTypes.string.isRequired
  },

  render: function() {
    return (
    <div>
      <div className='rr-word'>
        {this.props.word}
      </div>
      <div className='rr-button'>
        <button className='btn btn-primary btn-lg' onClick={RandomActions.setWord}>another</button>
      </div>
    </div>
    );
  }
});

module.exports = Word;
