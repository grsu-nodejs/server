import React, {Component} from 'react';
import {render} from 'react-dom';
import Articles from '../containers/Articles';
import Header from './Header';

require.context('../../assets/styles', true, /(\.less$)/);

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Articles/>
            </div>
        );
    }
}