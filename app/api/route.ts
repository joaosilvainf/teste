import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({status:"alive!"})
}
export async function POST() {
    return NextResponse.json({status:"alive!"})
}

export async function PUT() {
    return NextResponse.json({status:"alive!"})
}

export async function DELETE() {
    return NextResponse.json({status:"alive!"})
}

export async function UPDATE(productCode: string, arg1: number) {
    return NextResponse.json({status:"alive!"})
}