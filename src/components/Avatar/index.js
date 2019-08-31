import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () =>{
    const {avatarImage} = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: {eq: "perfil.jpg"}) {
                    childImageSharp{
                        fluid(maxWidth: 200, maxHeight: 200){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    return <Img
                fluid={avatarImage.childImageSharp.fluid} 
                style={{width: "100px"}} 
            />
}

export default Avatar