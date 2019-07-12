import React from 'react';
import {Link} from 'react-router-dom';

function Product(props) {
        console.log(props.product_id)
        return (
            <div>
                <img src={props.photo} alt={props.photo} />
                <div>
                    <div>
                        <h3>{props.name}</h3>
                        <h3>${props.price}</h3>
                    </div>

                    <div>
                    <button 
                    onClick={(event) => props.deleteItem(event.target.value)}
                    value={props.product_id}
                    >Delete Item</button>
                    <Link to="/edit/:id"><button>Edit Item</button></Link>
                    </div>
                </div>

            </div>
        )
}

export default Product;