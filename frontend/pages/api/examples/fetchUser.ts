// This is an example of to protect an API route
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { request, gql } from "graphql-request";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const secret = process.env.NEXTAUTH_SECRET;

    const token = await getToken({
      req,
      secret,
      // Raw gives the un-decoded JWT
      raw: true,
    });

    const query = gql`
    query FetchUser($email: String!) {
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
      { email: session.user?.email },
      { authorization: `Bearer ${token}` }
    );
    res.send(
      user
     );
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
