import { NextResponse } from "next/server"

const data = [
    { name: 'mohammad', age: 22 },
    { name: 'javad', age: 23 },
    { name: 'ali', age: 25 }
];


export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const name = searchParams.get('name')
    const filterdData = data.filter((item) => item.name === name)

    return NextResponse.json(filterdData)
}