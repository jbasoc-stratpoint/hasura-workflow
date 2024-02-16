import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"

export default function NotProtected() {
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/products")
      const json = await res.json()
      setContent(json)
    }
    fetchData()
  }, []);


  // If session exists, display content
  return (
    <Layout>
      <h1>Everyone Can Access these products</h1>
      <figure>
          <table>
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Description</th>
              </tr>
            </thead>
             <tbody>
             {content?.map(item => {
          return (
            <tr key={item.id}>
            <td>{item.product_name}</td>
            <td>{item.product_description}</td>
          </tr>)
        })}
    </tbody>
          </table>
        </figure>

    </Layout>
  )
}
