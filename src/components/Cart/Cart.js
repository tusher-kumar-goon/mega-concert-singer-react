import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}

    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.income
    const total = cart.reduce(totalReducer, 0)
    return (
        <div>
            <div className="total-cast  shadow-lg">
                <h5><i className="fas fa-user me-2 icon"></i>
                    Singer Aded:{cart.length}</h5>
                <h4>Total Cost:
                    <br />
                    Rs.{total}</h4>
            </div>
            <hr />

            <div className="result-container">
                <ul>
                    {
                        cart.map(singer => <li>{singer.name}</li>)

                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;