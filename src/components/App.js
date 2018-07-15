import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Input from "./input/Input";


class App extends Component {
    render() {
        return (
            <div>
                <Input/>
                <textarea/>
            </div>
        )
    }
}

export default hot(module)(App)

