import React from 'react';

import Title from '../title/title';
import Word from '../word/word';
import RandomStore from '../../stores/random-store';


// retrieve the current data from the store

function getRandomState() {
    return {
        word: RandomStore.getWord()
    };
}

var ReactApp = React.createClass({
    getInitialState: function() {
        return getRandomState();
    },

    componentDidMount: function() {
        RandomStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        RandomStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getRandomState());
    },

    render: function() {
        return (
        <div className='container'>
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <Title text='Random Word'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 text-center'>
            <Word word={this.state.word} />
          </div>
        </div>
      </div>
        );
    }
});

export default ReactApp;
