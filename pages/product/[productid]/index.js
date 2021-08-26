import { useRouter } from 'next/dist/client/router'

export default function ProductDetail () {
  const router = useRouter()
  const id = router.query.productid
  return <h1>Details about Product {id}</h1>
}
