import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Calendar from './calendar/calendar';

class App extends Component {
    render() {
        return (
            <div>
                <Calendar/>
            </div>
        )
    }
}

export default hot(module)(App)

