import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <main>
      <h1>An example of using Normal rendering vs SSR vs SSG on NextJS</h1>
      <p>Here we're building the same example, with 3 different approaches</p>
      <ul>
        <li>
          <Link href='/ssr'>
            <a>Server-side rendering example</a>
          </Link>
        </li>
      </ul>
    </main>
  )
}
