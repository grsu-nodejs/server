import React from 'react';
import {render} from 'react-dom';
import '../assets/css/style.css';


class App extends React.Component {
    render() {
        return (
            <p> Hello {this.props.author}!</p>
        );
    }
}

render(
    <App author="Name"/>,
    document.getElementById('app')
);
