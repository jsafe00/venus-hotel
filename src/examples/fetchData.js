import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
{
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }  
`

const FetchData = () => {
    const {
        site: {
            siteMetadata: {title},
        },
    } = useStaticQuery(getData);

    return (
        <div>
            <h2>Title : {title}</h2>
        </div>
    )
}

export default FetchData
