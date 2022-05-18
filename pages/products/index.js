import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link'

export default function Products() {
  return (
    <Fragment>
      <div>
        <Head>
          <title>Products</title>
        </Head>
        <h1>Products</h1>
        <ul>
          <li>
            <Link href='/products/item1'>Item 1</Link>
          </li>
          <li>
          <Link href='/products/item2'>Item 2</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}