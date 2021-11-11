import React, { Component } from 'react';

export class Client extends Component {
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.context.text}
            </div>
        );
    }

    handleClick = e => {
        console.log(e);
    }
}
