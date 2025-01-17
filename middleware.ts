import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import connectDB from "./app/db/mongooseConnect";

async function middleware(req: NextRequest, event: NextFetchEvent) {

    return NextResponse.next()
}

export default middleware;