import React, { Component } from 'react';




class Testing extends Component {
    render() {
        return (
            <div className="addbtn"
                onClick={() => this.props.handleAdd()}>
             this is test button
            </div>
        );
    }
}
export default Testing ;
