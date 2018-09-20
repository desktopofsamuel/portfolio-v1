import React from 'react'
import Link from 'gatsby-link'
import Author from '../components/author'
import Img from 'gatsby-image'
import HeroPhotoLogo from '../images/HeroPhotography.svg'

const Photography = ({ data }) => (
        
        <div>
          <div className="Container Top-M">
            <div className="HeroIcon">
              <div className="HeroIconWrapper Padding-S">
                  <img src={HeroPhotoLogo} alt="PhotographyLogo" width="100px" height="100px"></img>
              </div>
            </div>
          </div>
          <div className="PhotoGrid">
              {data.allPrismicPhotoGrid.edges.map(c => (
                  <div>
                  <Img sizes={c.node.data.photo.localFile.childImageSharp.sizes} />
                  <small className="PhotoCaption">{c.node.data.caption}</small>
                  </div>
              ))}
            </div>
        
        </div>
)

export const data = graphql`
    query Photography {
            allPrismicPhotoGrid {
              edges {
                node {
                  id
                  data {
                    caption
                    photo {
                      localFile {
                        childImageSharp {
                          sizes(maxWidth: 1140) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                              }
                          }
                        }
                      }
                    }
                    }
                  }
                }
              }
`
export default Photography