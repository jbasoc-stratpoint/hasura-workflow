// This is an example of to protect an API route
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { request, gql } from "graphql-request";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

    const secret = process.env.NEXTAUTH_SECRET;

    const token = await getToken({
      req,
      secret,
      raw: true,
    });

    const query = gql`
    query MyQuery {
      products {
        product_name
        id
      }
    }
    
    `;

    const { products } = await request(
      process.env.HASURA_PROJECT_ENDPOINT!, 
      query,
      undefined,
      { 'x-hasura-admin-secret' : process.env.HASURA_ADMIN_SECRET!! },
    );
    res.send(
      products
     );
  
};
