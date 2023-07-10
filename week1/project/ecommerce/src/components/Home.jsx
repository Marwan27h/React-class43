import React from "react"
import Products from "./Products"
import CoverCard from "./CoverCard"

const Home = () => {
    return (
        <div>
            <CoverCard
                image={"/assets/bg2.jpg"}
                h1={"NEW SEASON"}
                p={"CHECK OUT ALL THE TRENDS"}
            />
            <Products />
            <CoverCard
                image={"/assets/bg21.jpg"}
                h1={"%50 DISCOUNT"}
                p=  {"VISIT OUR STORE IN AMSTERDAM"}
            />
        </div>
    )
}

export default Home
