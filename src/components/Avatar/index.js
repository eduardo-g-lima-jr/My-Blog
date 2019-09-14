import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
            query{
                avatarImage: file(relativePath: {eq: "Perfil.jpg"}) {
                    childImageSharp{
                        fixed(width: 200, height: 200){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
  )
  return <S.AvatarWrapper
    fixed={avatarImage.childImageSharp.fixed}
  />
}

export default Avatar
