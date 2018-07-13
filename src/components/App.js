import React, {Component} from "react";
import { hot } from "react-hot-loader";
import Input from "./input/Input";
import TextArea from "./textarea/textarea";


class App extends Component {
    render(){
        return [
            <Input/>,
            <TextArea/>
        ]
    }
}

export default hot(module)(App)

