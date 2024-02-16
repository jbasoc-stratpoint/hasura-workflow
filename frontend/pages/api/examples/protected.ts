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
      raw: true,
    });

    console.log(token)
    const query = gql`
    query myOrders {
      orders {
        order_id
        product {
          product_name
          product_description
        }
      }
    }
    `;

    const  orders  = await request(
      process.env.HASURA_PROJECT_ENDPOINT!,
      query,
      undefined,
      { authorization: `Bearer ${token}` }
    );


    res.send({
      content: `This is a protected content. Your name is ${session?.user?.name} and your role is ${session?.user?.role}`,
      orders
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
