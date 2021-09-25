import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-main'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Navbar">Mega Festival</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Details</a>
                            </li>
                        </ul>
                        <form class="d-flex flex-fill mx-5">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='header-container' >
                <h4>We Arrange a Mega Concert in Our Area </h4>
                <p>For this resone we need some Popular singer Here 12 singer are available </p>
                <h4>But Our Total Budget:30000000</h4>
            </div>
        </div>
    );
};

export default Header;