import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '@/lib/mongodb'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken

      return session
    },
    signin: async ({ profile, account, metadata }) => {
      const client = await clientPromise
      const db = client.db('fashnet-users')
      console.log('asvffsgg')

      const getUser = await db
        .collection('users')
        .find({
          email: account.user.email,
        })
        .toArray()
      if (!getUser) {
        let userObject = {
          _id: account.user.email,
          name: account.user.name,
          email: account.user.email,
          pic: account.user.image_url,
          fashion_history: [],
        }
        let addUser = await db.collection('users').insertOne(userObject)
        console.log(addUser)
      }
      return false
    },
  },
}

export default NextAuth(authOptions)
