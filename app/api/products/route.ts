import { AllProducts } from "@/model/DummyData";
import { NextResponse } from "next/server";

export async function GET() {

    const data = AllProducts;
        
    return NextResponse.json(data)
}