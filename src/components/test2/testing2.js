import React, { Component } from 'react';




class Testing extends Component {
    render() {
        return (
            <div className="addbtn"
                onClick={() => this.props.handleAdd()}>
             test2 button
            </div>
        );
    }
}
export default Testing ;
