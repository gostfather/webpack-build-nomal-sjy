import React from 'react';
import ReactDOM from 'react-dom';
import logo from './image/logo.png';
// import '../../common';
import { a } from './treeShaking';

import './search.less';

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
        return (
            <div className='search-text'>
                Search Test
                {/* {a} */}
                <img onClick={this.loadComponent.bind(this)} src={logo}/>
                {Text? <Text />: null}
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)