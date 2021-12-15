import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Home = ({ data }) => {
  return (
    <main>
      <h1>Countries</h1>
      <ul>
        {data.map(item => (
          <li key={item.name.common}>
          <Link href={`/country/${item.name.common}`}>
            <a>{item.name.common}</a>
          </Link>
        </li>
        ))}
      </ul>
    </main>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()

  return { props: { data: data } }
}

export default Home
