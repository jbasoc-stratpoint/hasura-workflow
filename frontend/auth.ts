import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions as NextAuthConfig } from "next-auth"
import { getServerSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import * as jsonwebtoken from "jsonwebtoken";
import { request, gql } from "graphql-request";

import GitHub from "next-auth/providers/github"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

export const config = {
  providers: [
    GitHub({ clientId: process.env.AUTH_GITHUB_ID as string, clientSecret: process.env.AUTH_GITHUB_SECRET as string }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token!, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken as JWT;
    },
  },
  callbacks: {
    /*
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
    */
    async jwt({ token }) {
      //token.userRole = "admin"
      const query = gql`
      query FetchUser($email: String!) {
        users(where: {email: {_eq: $email}}) {
        email
          role {
            id
            role_name
          }
        }
      }
      `;
  
      const { users: user } = await request(
        process.env.HASURA_PROJECT_ENDPOINT!,
        query,
        { email: token.email },
        { 'x-hasura-admin-secret' : process.env.HASURA_ADMIN_SECRET!! },
      );

      if(user.length > 0) {
        const role = user[0].role.role_name;
        console.log(user)
        return {
          ...token,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": [role],
            "x-hasura-default-role": role,
            "x-hasura-role": role,
            "x-hasura-user-id": token.sub,
          },
        };
      }
      
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  
  },
  
} satisfies NextAuthConfig

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}

// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string
    }
  }
}
