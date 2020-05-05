import React, { Component } from 'react';
import logo from '../logo.svg';
// import { ReactComponent as Logo } from '../logo.svg';


export default class Header extends Component {
    render() {
        // console.log(logo);
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    {/* <Logo className="App-logo" /> */}
                    <h1>Welcome Ironhacker</h1>
                    <h3>You are ready to take it to the next level!</h3>
                </header>
            </div>
        )
    }
}