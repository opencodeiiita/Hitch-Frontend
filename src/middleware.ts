import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === "/auth/sign-in" || path === "/auth/sign-up";

    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/auth/sign-in", request.nextUrl));
    }
}

export const config = {
    matcher: [
        "/auth/sing-in",
        "/auth/sign-up",
        "/test-Chatbox",
        "/workspace/ConversationCard"
    ]
}