import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const adminUser = process.env.ADMIN_USERNAME || 'admin'
        const adminPass = process.env.ADMIN_PASSWORD

        if (credentials.username === adminUser && credentials.password === adminPass) {
          return { id: '1', name: 'Admin', email: 'admin@suhana.com' }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
