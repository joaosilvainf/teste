import { AllProducts } from "@/model/DummyData";
import { NextResponse } from "next/server";

export async function GET(request: Request, context:any) {
  const {params} = context;

  const data = AllProducts;

  const product = data.find(p=>p.code == params.productid); 

  if (product)
  {
    return NextResponse.json(product||{})
  }
  else
  {
    return NextResponse.json({ message: "Not Found" }, { status: 404 }); 
  }
  
  
}