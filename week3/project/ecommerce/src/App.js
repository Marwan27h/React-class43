import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductCard />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}

export default App
