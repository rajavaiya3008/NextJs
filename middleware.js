import { NextRequest, NextResponse } from "next/server";

const instructorRoutes = [
    '/employe',
    '/worker'
]

const role = 'instructo'

export async function middleware(req){
    // console.log('middleware is running')
    // console.log('req', req)
    const { pathname } = req.nextUrl;
    // console.log('pathname', pathname)
    if(role !== 'instructor' && instructorRoutes.includes(pathname)){
        return NextResponse.redirect(new URL('/',req.url))
    }
}