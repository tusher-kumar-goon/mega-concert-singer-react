import React from 'react';
import './Singer.css'
const Singer = (props) => {
    const { name, img, income, born, awards, singing } = props.singer;
    return (
        <div className="col-md-4  ">
            <div className="card-group mb-3   singer-cart  ">
                <div className="card shadow-lg red ">


                    <div className="redy"> <div>
                        <img src={img} className="card-img-top images " alt="..." />
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Per Song : Rs.{income}</p>
                        </div>
                    </div>
                    <div className="about">
                        <p ><small>From: {born}</small></p>
                        <p>Awards : {awards}</p>
                        <p>Singing : {singing}</p>
                    </div>
                    <button
                        onClick={() => props.handleAddSinger(props.singer)}
                        className='btn btn-warning btn-add'
                    >
                        <i className="fas fa-user me-2 "></i>
                        Add Singer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Singer;