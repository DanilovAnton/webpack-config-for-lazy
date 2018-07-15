import React, {Component} from "react";
import "./textarea.css";

export default class TextArea extends Component {
    render() {
        return (
            <dev className="new">
                <span>text#1</span> <textarea rows={10}/>
            </dev>
        )
    }
}