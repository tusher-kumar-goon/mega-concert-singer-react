import React from 'react';
import './Singer.css'
const Singer = (props) => {
    const { name, img, income, born, awards, singing } = props.singer;
    return (
        <div className="col-md-4">
            <div class="card-group mb-3">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Per Song : {income}</p>
                        <p>From: {born}</p>
                        <p>Awards : {awards}</p>
                        <p>Singing:{singing}</p>
                        <button className='btn btn-primary'>Add TO Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;