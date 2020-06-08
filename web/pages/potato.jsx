/* eslint-disable */
import React from 'react'
import client from '../client'
import groq from 'groq'
import Layout from '../components/Layout'
import styles from "../components/sections/ImageSection.module.css"
import imageUrlBuilder from "@sanity/image-url"
const builder = imageUrlBuilder(client)

const Potato = () => <p>potato</p>
export default Potato
/*



const potatoQuery = groq`*[_type == 'potato']
`

const Potato = (props) => {
  const {content, config} = props
  return (
    <Layout config={config}>
      <h1>Index Potatoes</h1>
      {
        content.map(potato =>
          <div>
          <p>{potato.title}</p>
            <img
              src={builder
                .image(potato.image)
                .auto('format')
                .width(200)
                .url()}
              alt={potato.title}
            />
          </div>
        )
      }
    </Layout>
  )
}

Potato.getInitialProps = async () => {
  return {
    content: await client.fetch(potatoQuery)
  }
}

*/

