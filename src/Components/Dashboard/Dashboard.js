import React, {Component} from 'react';
import axios from 'axios';

import Product from '../Product/Product.js';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            shelfieItems: []
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        axios
        .get('/api/items').then(res => {
            this.setState({
                shelfieItems: res.data
            })
        })
    }

    deleteItem(id) {
        axios
        .delete(`/api/item/${id}`)
        .then(res => {
            this.setState({
               shelfieItems: res.data 
            })
        })
    }

    render() {
        let mappedProducts = this.state.shelfieItems.map((product, index) => {
            return <div key={index}>
                <Product 
                product_id={product.product_id}
                name={product.name}
                price={product.price}
                photos={product.photos}
                deleteItem={this.deleteItem}
                 />
            </div>
    })
    console.log(mappedProducts)
        return (
            <div>
                {mappedProducts}
            </div>
            
        );
    }
}

export default Dashboard;

