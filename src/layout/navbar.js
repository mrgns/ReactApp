import React from "react"

export default function Navbar() {
    return (
        <div>
            <nav style={{margin:20}} className="navbar navbar-expand-lg navbar-dark bg-success">
                <a style={{marginLeft:20}} className="navbar-brand" href="#">Full Stack Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <button style={{marginLeft:1100}} className="btn btn-outline-light">add Product</button>
            </nav>
        </div>
    )
}