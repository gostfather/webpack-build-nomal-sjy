// import React from 'react';
// import logo from './image/logo.png';

// import './search.less';
const React = require('react');
const logo = require('./image/logo.png').default;

require('./search.less');

class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }

    loadComponent(){
        import('./test').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }

    render() {
        const {Text} = this.state;
        return <div className='search-text'>
            Search Test
            {/* {a} */}
            <img onClick={this.loadComponent.bind(this)} src={logo}/>
            {Text? <Text />: null}
        </div>
    }
}

module.exports = <Search />;