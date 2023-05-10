import { useState } from "react"
import { AddToCartIcon } from "./Icons.jsx"

const Products = ({products}) => {

    return (
        <main className="bg-stone-400 container mx-auto pt-5">
            <div
                className="flex flex-col md:grid md:grid-cols-3 md:gap-7 justify-between items-center mx-5"
            >
                {products.slice(0, 9).map(product => (
                    <div 
                        key={product.id}
                        className="pt-2 bg-white shadow-md rounded-lg mt-5"
                    >
                        <img
                            className='h-80 w-60 object-cover rounded-md m-auto'
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div className="text-center">
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <button
                            className="bg-pink-600 hover:bg-pink-700 text-white rounded-md m-2 p-1 shadow-md"
                        >
                            <AddToCartIcon/>
                        </button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products