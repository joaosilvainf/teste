"use client";
import ProductCardHorizontal from "./components/ProductHorizontal";
import { SfButton } from '@storefront-ui/react';
import { useEffect, useState } from "react";
import { Cart } from "@/model/Model";

const actionItem = [
    {
      icon: <SfButton />,
      label: "Pay Now",
      ariaLabel: "Pay Now",
      role: "button",
      onclick: () =>{
        window.location.href = "/payment";
      } 
    },
];
export default function CartListing() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("/api/cart")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>Cart is Empty</p>;

    var cards = (data as Cart[]).map((p) => (
        
      <ProductCardHorizontal {...p} key={p.productCode} />
    ));
  
    return (
      <main>
        <div className="flex mx-12 my-8">
          <div className="flex gap-6">
            <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold">Products:</h2>
            <div className="flex flex-wrap gap-2">
            {cards}
            </div>
            <SfButton className="mr-2 -ml-0.5 rounded-md text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
            as="a" href="/cart/payment"> Pay Now</SfButton>
            </div>
          </div>
        </div>
      </main>
    );
  }
  



