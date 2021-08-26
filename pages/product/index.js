import Link from 'next/link'

export default function ProductList ({ productid = 100 }) {
  return (
    <>
      <Link href='/'>
        <a>To Home</a>
      </Link>

      <ul>
        <li>
          <Link href='/product/1'>
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href='/product/2'>
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href='/product/3' replace>
            <a>Product 3</a>
          </Link>
        </li>
        <li>
          <Link href={`/product/${productid}`}>
            <a>Product {productid}</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
