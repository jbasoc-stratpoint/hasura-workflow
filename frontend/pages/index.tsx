import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Trying Hasura using NextAuth.js</h1>
      <p>
        This shows the basic features of Hasura:
      </p>
        <ul>
          <li>Authentication using <a href="https://next-auth.js.org">NextAuth.js</a>  and Authorization</li>
          <li>Fetching of data using Hasura</li>
          <li>Generate relationships among tables using Hasura</li>
          <li>Acions and events (ongoing)</li>
      </ul>
      
      <p>
        This also compares the response time of Hasura vs NestJs (ongoing)
      </p>
      <br/>
      <p>
        You may play around with hasura locally to fully understand and appreciate its features.
      </p>
      <p>
         For your guidance, access this <a href="https://docs.google.com/document/d/1E4hMWBeHCKwnuU-JRj6mjAXm6VlItw0qKtBWcmGbsL8/edit">documentation</a> (still ongoing).
      </p>
      <p>
        Link to your local hasura: <a href="http://localhost:8080/">http://localhost:8080/</a>
      </p>
    </Layout>
  )
}
