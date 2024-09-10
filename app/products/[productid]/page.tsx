'use client'
import { Product } from "@/model/Model";
import GalleryHorizontal from "./components/Galery";
import ProductDetails from "./components/ProductDetails";
import ProductSliderBasic from "./components/ProductSliderBasic";
import { AllProducts } from "@/model/DummyData";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import FiltersSideBar from "@/components/FiltersSideBar";

export default function Page( { params }: { params: { productid: string } }) {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   

    useEffect(() => {
        fetch('/api/products/' + params.productid)
          .then((res) => res.ok?res.json():null)
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return <p>Loading...</p>
    
    const product : Product = data as any ;
      
    if (product)
    {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <div className="flex flex-row md:flex-row">
                <GalleryHorizontal />
                <ProductDetails {...product}/>
            </div>
            <h4 className="text-3xl">Recommendations</h4>
            <ProductSliderBasic />
        </div>);
    }
    else
    {
        return <Layout><p>Product {params.productid} not found</p></Layout>
    }
}