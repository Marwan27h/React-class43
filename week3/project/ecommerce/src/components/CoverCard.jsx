import React from "react"


const CoverCard = (props) => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0 ">
                <img
                    src={props.image}
                    className="card-img"
                    alt="background"
                    height="550px"
                />
                <div className="card-img-overlay d-flex  ">
                    <div className="container">
                        <h5 className="card-title display-1 fw-bold mb-2 text-warning">
                           {props.h1}
                        </h5>
                        <p className="card-text lead fs-4 fw-bold mx-3">
                            {props.p}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoverCard
