import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}

// the protected routes will not even start rendering until the Middleware verifies the authentication, enhancing both the security and performance of your application