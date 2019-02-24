import React, { Component } from 'react';

import './Main.css';

class Main extends Component {

    render() {

        return (
            <div className="main-container">
                <div className="content">
                    <div className="logo-container">
                        <img src="/logo.png" />
                    </div>
                    <div className="description-container">
                        <div className="title-container">
                            <h1 className="app-name">Motoondo</h1>
                        </div>
                        <div>
                            <h2>Znajdź mechanika</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
