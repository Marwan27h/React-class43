import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { delCart, addCart } from "../redux/action/index"

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    useEffect(() => {
        const storedCartItems =
            JSON.parse(localStorage.getItem("cartItems")) || []
        if (storedCartItems.length > 0) {
            storedCartItems.forEach((item) => {
                dispatch(addCart(item))
            })
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const handleRemoveClick = (product) => {
        dispatch(delCart(product))
    }

    const renderCartContent = () => {
        if (cartItems.length === 0) {
            return <p>Your cart is empty.</p>
        }

        return cartItems.map((product) => (
            <div className="row mb-5" key={product.id}>
                <div className="col-md-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center align-items-start">
                    <h3 className="text-uppercase text-warning mb-3">
                        {product.category}
                    </h3>
                    <h4 className="mb-3">{product.title}</h4>
                    <p className="lead fw-bold mb-3">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star text-secondary"></i>
                    </p>
                    <h3 className="display-7 fw-bold mb-3">
                        $ {product.price}
                    </h3>
                    <p className="lead fw-bold mb-3">{product.description}</p>

                    <button
                        onClick={() => handleRemoveClick(product)}
                        className="btn btn-danger mt-2"
                    >
                        Remove
                    </button>
                </div>
            </div>
        ))
    }

    return <div className="container mt-4">{renderCartContent()}</div>
}

export default Cart
