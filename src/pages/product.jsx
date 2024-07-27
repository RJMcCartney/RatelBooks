import Breadcrumbs from "@/components/Breadcrumbs"
import ProductDetailsOverview from "@/components/ProductDetailsOverview"
import RecommendedProducts from "@/components/RecommendedProducts"
import MainLayout from "@/components/layouts/MainLayout"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function ProductDetails() {
    const [product, setProduct] = useState(null)

    async function fetchProduct() {
        const data = await fetch("https://dummyjson.com/products/5").then((res) => res.json())
        // console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <Head>
                <title>Product Details - Framework Flow</title>
            </Head>
            <MainLayout>
                <Breadcrumbs />
                {product ? (
                    <>
                        <ProductDetailsOverview product={product} />
                        <RecommendedProducts />
                    </>
                ) : (
                    <div className="p-12 flex min-h-[22rem]">
                        <span className="m-auto loading loading-ring loading-lg"></span>
                    </div>
                )}
            </MainLayout>
        </>
    )
}
