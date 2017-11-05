import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './style/styles.scss';

import Header from './components/Header';
import ContentGallery from './components/ContentGallery';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ContentGallery />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
