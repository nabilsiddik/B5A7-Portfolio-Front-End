import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     console.log('hello')
    //     return null
    //   },
    // }),
    Google
  ],
})