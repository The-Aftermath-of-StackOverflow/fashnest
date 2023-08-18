import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
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
    Credentials({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: 'Email',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Implement your own logic to validate credentials
        const user = {
          id: 1,
          email: credentials.email,
          name: 'admin',
        }
        // console.log(user)
        if (
          credentials.email === process.env.ADMIN_EMAIL &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return Promise.resolve(user)
        } else {
          throw new Error('invlid credentials')
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60,
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
      session.sessionId = randomUUID?.() ?? randomBytes(32).toString('hex')

      jwt.sign(
        session.user,
        secret,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          session.jwtToken = token
        }
      )
      return session
    },
    async redirect({ url, baseUrl }) {
      return url
    },
  },
}

export default NextAuth(authOptions)
