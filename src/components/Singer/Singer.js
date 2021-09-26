import React from 'react';
import './Singer.css'
const Singer = (props) => {
    const { name, img, income, born, awards, singing } = props.singer;
    return (
        <div className="col-md-4 ">
            <div class="card-group mb-3   singer-cart  ">
                <div class="card shadow-lg  ">
                    <img src={img} className="card-img-top images " alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Per Song : Rs.{income}</p>
                        <p>From: {born}</p>
                        <p>Awards : {awards}</p>
                        <p>Singing : {singing}</p>
                        <button

                            onClick={() => props.handleAddSinger(props.singer)}
                            className='btn btn-warning btn-add'
                        >
                            <i class="fas fa-user me-2 "></i>
                            Add Singer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;