import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const directLegacyRedirects: Record<string, string> = {
  "/dial-refinishing-vs-replacement": "/dial-refinishing-vs-dial-replacement/",
  "/dial-refinishing-vs-replacement/": "/dial-refinishing-vs-dial-replacement/"
};

const hasFileExtension = (pathname: string) => /\/[^/]+\.[^/]+$/.test(pathname);
const isWellKnownPath = (pathname: string) => pathname === "/.well-known" || pathname.startsWith("/.well-known/");

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyDestination = directLegacyRedirects[pathname];

  if (legacyDestination) {
    return NextResponse.redirect(new URL(legacyDestination, request.url), 308);
  }

  if (pathname !== "/" && !pathname.endsWith("/") && !hasFileExtension(pathname) && !isWellKnownPath(pathname)) {
    return NextResponse.redirect(new URL(`${pathname}/`, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"]
};
