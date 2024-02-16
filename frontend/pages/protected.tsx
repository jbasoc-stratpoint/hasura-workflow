import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"

export default function ProtectedPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()
  const [orders, setOrders] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
        setOrders(json.orders.orders)
      }
    }
    
    fetchData()
  }, [session])

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <Layout>
      <h1>Protected Orders Page</h1>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
      <div>
        <p>If your role is an admin, you can view all orders; otherwise, you can only view your own orders:</p>
        <figure>
          <table>
            <thead>
              <tr>
                <th scope="col">Order No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Description</th>
              </tr>
            </thead>
             <tbody>
             {orders?.map(item => {
          return (
            <tr key={item.id}>
            <th scope="row">{item.order_id}</th>
            <td>{item.product.product_name}</td>
            <td>{item.product.product_description}</td>
          </tr>)
        })}
    </tbody>
          </table>
        </figure>
        
       
      </div>
    </Layout>
  )
}
