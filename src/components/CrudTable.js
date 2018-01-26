import React, { Component } from 'react';
import EditForm from './EditForm';
import Row from './Row';

class CrudTable extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            products: [],
            index: 1,
            editing: 0
        };
        
        this.addProduct = this.addProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }
    
    addProduct(product){
        var products = this.state.products;
        var index = this.state.index;
        
        product.id = index;
        index++;
        
        products.push(product);
        
        this.setState({
            products: products,
            index: index,
            editing: this.state.editing
        });
    }
    
    editProduct(id){
        this.setState({
            products: this.state.products,
            index: this.state.index,
            editing: id
        });
    }
    
    saveProduct(editedProduct){
        var oldProducts = this.state.products;
        var products = [];
        oldProducts.forEach((product) => {
            if(product.id === this.state.editing){
                products.push(editedProduct);
            }
            else{
                products.push(product);
            }
        });
        
        this.setState({
            products: products,
            index: this.state.index,
            editing: 0
        });
    }
    
    deleteProduct(id){
        var oldProducts = this.state.products;
        var products = [];
        
        oldProducts.forEach((product) => {
            if(product.id !== id){
                products.push(product);
            }
        });
        
        this.setState({
            products: products,
            index: this.state.index,
            editing: this.state.editing
        });
    }
    
    render() {
        var rows = [];
        
        this.state.products.forEach((product) => {
            if(product.id && product.id === this.state.editing){
                rows.push(<EditForm key={product.id} product={product} clickHandler={this.saveProduct} />);
            }
            else{
                rows.push(<Row 
                        key={product.id} 
                        product={product} 
                        deleteClickHandler={this.deleteProduct} 
                        editClickHandler={this.editProduct} 
                    />);
            }
        });

        return (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EditForm key={Math.random()} product={{ name: '', quantity: '', price: '' }} clickHandler={this.addProduct} />
                            {rows}
                        </tbody>
                    </table>
        );
    }
}

export default CrudTable;