import React from 'react'
import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'

const Country = ({ data }) => {
    console.log(data)
  return (
      <>
<NextSeo title={data.name} description={data.region}  
openGraph={{
    type: 'website',
    locale: 'en_US',
    url: 'https://thegraph.com/explorer',
    site_name: data.name,
    title: data.name,
    description: data.region,
    images: [
      {
        url: data.flags.png,
        alt: `${data.name} Preview`,
      },
    ],
  }}
/>  
    <main>
      <h1>{data.name}</h1>
    </main>
    </>
  )
}

export async function getServerSideProps (context) {
  const name = context.query.name
  const response = await fetch(`https://restcountries.com/v2/name/${name}`)
  const data = await response.json()

  return { props: { data: data[0] } }
}

export default Country
