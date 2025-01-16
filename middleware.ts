import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import connectDB from "./app/db/mongooseConnect";

async function middleware(req: NextRequest, event: NextFetchEvent) {
    console.log("🚀 ~ middleware ~ req", 'this is a test')

    return NextResponse.next()
}

export default middleware;