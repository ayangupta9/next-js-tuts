import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home () {
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
    </div>
  )
}
