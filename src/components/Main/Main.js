import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';

const Main = () => {

    const [singers, setSingers] = useState([])

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
                        ></Singer>)
                    }

                </div>
            </div>
            <div className="col-md-2">
                calculation cart er
            </div>
        </div >

    );
};

export default Main;