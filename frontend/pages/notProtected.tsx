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
      <h1>Everyone Can Access this product</h1>
      <p>
        {content?.map(item => {
          return (<div><strong>{item.product_name}</strong></div>)
        })}
      </p>
    </Layout>
  )
}
