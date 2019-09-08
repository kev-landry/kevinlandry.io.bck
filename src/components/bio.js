/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic_2.jpg/" }) {
        childImageSharp {
          fixed(width: 225, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
				className='avatar'
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          borderRadius: `50%`,
        }}
        imgStyle={{
          borderRadius: `10%`,
        }}
      />
			<div
				style= {{
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
				}}>
				<p
					style= {{
						marginBottom: 0
					}}
				>
					Ecrit par 
					{` `}
					<a href={`https://twitter.com/${social.twitter}`}>
						<strong>{author}</strong>
					</a>
					{/* ,
					{` `}
					développeur web fullstack */}
					.
				</p>
				<p
					style= {{
						marginBottom: 0
					}}
				>
					J'écris plein de choses qui parle de code.
				</p>
			</div>
    </div>
  )
}

export default Bio
