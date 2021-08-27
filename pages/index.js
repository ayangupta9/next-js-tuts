import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export default function Home () {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing order')
    router.push('/product')
    // router.replace('/product')
  }

  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link href='/blog'>
            <a>To the Blogs</a>
          </Link>
        </li>
        <li>
          <Link href='/product'>
            <a>To the Products</a>
          </Link>
        </li>
      </ul>

      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
