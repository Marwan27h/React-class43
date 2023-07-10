import React, { useState, useEffect } from "react"
import allProducts from "../fake-data/all-products"
import allCategories from "../fake-data/all-categories"

const Products = () => {
    const [filter, setFilter] = useState(allProducts)
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        const selectedCategoryFromLocalStorage =
            localStorage.getItem("selectedCategory")

        setSelectedCategory(selectedCategoryFromLocalStorage || "All")
    }, [])

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilter(allProducts)
        } else {
            setFilter(
                allProducts.filter(
                    (product) =>
                        product.category === selectedCategory.substring(6)
                )
            )
        }

        localStorage.setItem("selectedCategory", selectedCategory)
    }, [selectedCategory])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div className="container my-5 py-5 products-area">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Latest Products
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="buttons d-flex justify-content-center mp-5 pb-5">
                    {["All", ...allCategories].map((category) => (
                        <button
                            className={`btn btn-outline-dark me-2 ${
                                selectedCategory === category ? "active" : ""
                            }`}
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category === "All"
                                ? category
                                : category.substring(6)}
                        </button>
                    ))}
                </div>
                {filter.map((product) => (
                    <div className="col-md-3 mb-4 " key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.title}
                                height="250px"
                            />
                            <div className="card-body">
                                <h5 className="card-title mb-0">
                                    {product.title.substring(0, 12)} ...
                                </h5>
                                <p className="card-text fw-bold">
                                    ${product.price}
                                </p>
                                <a href="/" className="btn btn-outline-dark">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
