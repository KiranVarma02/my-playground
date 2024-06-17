import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
    // console.log("🚀 ~ POST ~ req:", req)
    const body = await req.formData()
    console.log("🚀 ~ POST ~ body:", body)

    return Response.json(body)
}