import React, { Component } from 'react';

class EditForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product
        }
    }
    
    setProductValue(e){
        var product = this.state.product;
        var prop = e.target.className;
        var val = e.target.value;
        product[prop] = val;
        this.setState({
            product: product
        });
    }
    
    render() {
        return (
                <tr>
                    <td><input type="text" value={this.state.product.name} className="name" onChange={e => this.setProductValue(e)} /></td>
                    <td><input type="text" className="quantity" value={this.state.product.quantity} onChange={e => this.setProductValue(e)} /></td>
                    <td><input type="text" className="price" value={this.state.product.price} onChange={e => this.setProductValue(e)} /></td>
                    <td><button onClick={() => this.props.clickHandler(this.state.product)}>{!this.props.product.id ? 'add' : 'save'}</button></td>
                </tr>
        );
    }
}

export default EditForm;