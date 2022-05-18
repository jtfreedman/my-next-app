import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

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
            <a href='/products/item1'>Item 1</a>
          </li>
          <li>
          <a href='/products/item2'>Item 2</a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}