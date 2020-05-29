import React, { Component } from 'react';

import './AddButton.css';


class AddButton extends Component {
    render() {
        return (
            <div className="addbtn"
                onClick={() => this.props.handleAdd()}>
                {this.props.children}
            </div>
        );
    }
}
export default AddButton;
