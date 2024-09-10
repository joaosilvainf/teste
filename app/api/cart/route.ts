import { CartList } from "@/model/DummyData";
import { NextResponse } from "next/server";

export async function GET() {


    const data = CartList;
        
    return NextResponse.json(data)
}
export async function UpdateCart(productCode: string, arg1: number){
    CartList.forEach(item => {
        if(item.productCode === productCode){
            item.quantity = arg1;
        }
    })
    return NextResponse.json(CartList)
}