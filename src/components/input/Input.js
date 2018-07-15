import React, {Component} from "react";
import "./input.scss";

export default class Input extends Component {
    render() {
        console.log('sum: ',2+3);
        return (
            <div className="main">
                <ul className='colorUl'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <span>input#1</span> <input/>
            </div>
        )
    }
}