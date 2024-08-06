import Link from "next/link"
import React from "react"

function ProductCategoryCard({ category, size }) {
    const { name, image } = category
    return (
        <Link href="/product" className="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300">
            <img
                alt=""
                src={image}
                className="object-cover w-full aspect-video group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                {size === "xl" ? (
                    <>
                        <h3 className="absolute top-0 left-0 m-4 text-4xl font-bold text-green-800" style={{ textShadow: '4px 4px 6px rgba(255, 255, 255, 0.9), -4px -4px 6px rgba(255, 255, 255, 0.9), -2px 2px 4px rgba(255, 255, 255, 0.9), 2px -2px 4px rgba(255, 255, 255, 0.9)' }}>
                        {name}
                        </h3>
                        <p className="max-w-lg py-3 text-green-900" style={{ textShadow: '4px 4px 6px rgba(255, 255, 255, 0.9), -4px -4px 6px rgba(255, 255, 255, 0.9), -2px 2px 4px rgba(255, 255, 255, 0.9), 2px -2px 4px rgba(255, 255, 255, 0.9)' }}>
                        {name}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!
                        </p>
                        <button className="btn btn-sm capitalize bg-green-800 text-white hover:bg-green-700">
                         Shop Now
                        </button>
                        </>
                        ) : (
                    <>
                        <h3 className="absolute top-0 left-0 m-4 text-xl font-medium text-green-800 mb-2" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)' }}>
                        {name}
                        </h3>
                        <button className="btn btn-sm capitalize bg-green-800 text-white hover:bg-green-700">
                         Shop Now
                        </button>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ProductCategoryCard
