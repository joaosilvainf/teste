"use client";
import ProductCardVertical from "./components/ProductCardVertical";
import { Product } from "@/model/Model";
import { useEffect, useState } from "react";
import FiltersSideBar from "@/components/FiltersSideBar";
import { Pagination } from "@/components/Pagination";

export default function ProductListing() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  var cards = (data as Product[]).map((p) => (
    <ProductCardVertical {...p} key={p.code} />
  ));

  return (
    <main>
      <div className="flex mx-12 my-8">
        <div className="flex gap-6">
        <FiltersSideBar />
          <div className="flex flex-col gap-8">
          <h2 className="text-lg font-bold">Products:</h2>
          <div className="flex flex-wrap gap-2">
          {cards}
          </div>
          <Pagination/>
          </div>
        </div>
      </div>
    </main>
  );
}
