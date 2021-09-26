import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';

const Main = () => {

    const [singers, setSingers] = useState([])
    //  cart  calculation
    const [cart, setCart] = useState([])

    const handleAddSinger = (singer) => {
        const newCart = [...cart, singer]

        setCart(newCart)


    }

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    return (
        <div className="row container-fluid">
            <div className="col-md-9">
                <div className="row">
                    {
                        singers.map(singer => <Singer
                            singer={singer}
                            handleAddSinger={handleAddSinger}
                        ></Singer>)
                    }

                </div>
            </div>
            <div className="col-md-2">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div >

    );
};

export default Main;