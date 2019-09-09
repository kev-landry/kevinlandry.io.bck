/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import Lottie from "react-lottie"
import animationGithub from "../assets/github.json"
import animationTwitter from "../assets/twitter.json"
import animationLinkedin from "../assets/linkedin.json"

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
            github
          }
        }
      }
    }
  `)

  // const {isPaused, isStopped} = useState(false);
  const [isGithubStopped, setGithubAnimation] = useState(true)
  const [isTwitterStopped, setTwitterAnimation] = useState(true)
  const [isLinkedinStopped, setLinkedinAnimation] = useState(true)
  const { author, social } = data.site.siteMetadata

  const githubOptions = {
    loop: true,
    autoplay: false,
    animationData: animationGithub,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const twitterOptions = {
    loop: true,
    autoplay: false,
    animationData: animationTwitter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const linkedinOptions = {
    loop: true,
    autoplay: false,
    animationData: animationLinkedin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div
			style={{
				marginBottom: rhythm(0.5),
			}}
		>
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="avatar"
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
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
          }}
        >
          <p
            style={{
              marginBottom: 0,
            }}
          >
            Ecrit par
            {` `}
            <a href={`https://twitter.com/${social.twitter}`}>
              <strong>{author}</strong>
            </a>
            {/* ,
						{` `}
						développeur web fullstack */}.
          </p>
          <p
            style={{
              marginBottom: 0,
            }}
          >
            J'écris plein de choses qui parle de code.
          </p>
        </div>
      </div>
			<p className="social-container">
				
				<a
					href={`https://github.com/${social.github}`}
					onMouseEnter={() => setGithubAnimation(!isGithubStopped)}
					onMouseLeave={() => setGithubAnimation(!isGithubStopped)}
					target="_blank"
					style={{textDecoration: 'none'}}
				>
					<Lottie
						options={githubOptions}
						height={25}
						width={25}
						isStopped={isGithubStopped}
						// isPaused={isStopped}
						test={"test"}
					/>
				</a>
				-
				<a
					href={`https://twitter.com/${social.twitter}`}
          rel="noopener noreferrer"
					onMouseEnter={() => setTwitterAnimation(!isTwitterStopped)}
					onMouseLeave={() => setTwitterAnimation(!isTwitterStopped)}
					target="_blank"
				>
					<Lottie
						options={twitterOptions}
						height={25}
						width={25}
						isStopped={isTwitterStopped}
						// isPaused={isStopped}
						test={"test"}
					/>
				</a>
				-
				<a
					href="https://www.linkedin.com/in/kevin-landry-286779137"
					onMouseEnter={() => setLinkedinAnimation(!isLinkedinStopped)}
					onMouseLeave={() => setLinkedinAnimation(!isLinkedinStopped)}
					target="_blank"
				>
					<Lottie
						options={linkedinOptions}
						height={25}
						width={25}
						isStopped={isLinkedinStopped}
						// isPaused={isPlayed}
						test={"test"}
					/>
				</a>
				-
				<a
					href={`https://gitlab.com/${social.github}`}
					target="_blank"
				>
					<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.65,14.39,12,22.13,1.35,14.39a.84.84,0,0,1-.3-.94L2.27,9.67,4.71,2.16A.42.42,0,0,1,4.82,2,.43.43,0,0,1,5.4,2a.42.42,0,0,1,.11.18L7.95,9.67h8.1l2.44-7.51A.42.42,0,0,1,18.6,2a.43.43,0,0,1,.58,0,.42.42,0,0,1,.11.18l2.44,7.51L23,13.45A.84.84,0,0,1,22.65,14.39Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
				</a>
			</p>
    </div>
  )
}

export default Bio
