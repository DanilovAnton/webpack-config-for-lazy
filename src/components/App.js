import React, {Component} from "react";
import { hot } from "react-hot-loader";
import Input from "./input/Input";


class App extends Component {
    render(){
        return (
            <Input/>
        )
    }
}

export default hot(module)(App)

