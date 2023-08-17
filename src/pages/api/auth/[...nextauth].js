import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { randomBytes, randomUUID } from 'crypto'
import jwt from 'jsonwebtoken'

const secret = process.env.NEXTAUTH_SECRET

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.sessionId = randomUUID?.() ?? randomBytes(32).toString("hex");

      jwt.sign(session.user, secret, {
        expiresIn: 31556926, // 1 year in seconds
      }, (err, token) => {
        session.jwtToken = token
      })
      return session
    },
    async redirect({ url, baseUrl }) {
      return url
    }
  },
}

export default NextAuth(authOptions)
