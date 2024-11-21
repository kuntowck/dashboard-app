import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogggedIn = !!auth?.user
      const isOnDasboard = nextUrl.pathname.startsWith("/dashboard")
      if (isOnDasboard) {
        if (isLogggedIn) return true
        return false // redirect unauthenticated users to login page
      } else if (isLogggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl))
      }
      return true
    },
  },
  providers: [], // add providers with an empty array
} satisfies NextAuthConfig
