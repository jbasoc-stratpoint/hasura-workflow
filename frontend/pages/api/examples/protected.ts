// This is an example of to protect an API route
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { request, gql } from "graphql-request";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const secret = process.env.NEXTAUTH_SECRET;

    res.send({
      content: `This is protected content. Your name is ${session?.user?.name}`,
    });
  } else {
    res.send({
      error:
        "You must be sifsdfsdfsdgned ineweqw to view the protected content on this page.",
    });
  }
};
