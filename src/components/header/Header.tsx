import React from "react";

const Header = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col" >
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">phòng đào tạo</a>
                                <button className="navbar-toggler" type="button" href="#" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" >Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Header;