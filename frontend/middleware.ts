import { withAuth } from "next-auth/middleware"
import { useSession, getSession } from "next-auth/react"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export  default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      const requestForNextAuth = {
        headers: {
          cookie: req.headers.get('cookie'),
        },
      };

      const session = await getSession({ req: requestForNextAuth as any });
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/admin") {
        return session?.user?.role === "admin"
      }
      // `/me` only requires the user to be logged in
      return !!session
    },
  },
})

export const config = { matcher: ["/admin", "/me"] }
