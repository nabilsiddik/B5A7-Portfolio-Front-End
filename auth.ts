import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials === null) return null

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          })

          if (!res.ok) {
            return null
          }

          const parsedRes = await res.json()

          console.log(parsedRes)

          const accessToken = parsedRes.accessToken
          const refreshToken = parsedRes.refreshToken
          const userInfo = parsedRes.userInfo

          return {
            accessToken,
            refreshToken,
            role: userInfo?.role,
            email: userInfo?.email
          }

        } catch (err: any) {
          throw new Error(err)
        }
      },
    }),
    Google
  ],
  // callbacks: {
  //   jwt: async ({ token, account, user }) => {
  //     if (account && user) {
  //       return {
  //         ...token,
  //         accessToken: user.accessToken,
  //         refreshToken: user.refreshToken,
  //         user
  //       }
  //     }

  //     return token
  //   },
  //   session: async({session, token}) => {
  //     if(token){
  //       session.accessToken = token.accessToken as string
  //       session.refreshToken = token.refreshToken as string
  //       session.user = {
  //         email: token.user?.email,
  //         role: token.user?.role
  //       }
  //     }

  //     return session
  //   }
  // }
})