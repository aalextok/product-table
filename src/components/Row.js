import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.quantity}</td>
                <td>{this.props.product.price}</td>
                <td>
                    <button onClick={() => {this.props.editClickHandler(this.props.product.id)}}>
                        edit
                    </button>
                    <button onClick={() => {this.props.deleteClickHandler(this.props.product.id)}}>
                        delete
                    </button>
                </td>
            </tr>
    );
  }
}

export default Row;