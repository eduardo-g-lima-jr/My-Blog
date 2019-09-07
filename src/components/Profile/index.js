import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
        site:{siteMetadata:{author,position,description}}
    } = useStaticQuery(graphql`
            query MySiteMetadata {
                site {
                siteMetadata {
                    author
                    description
                    position
                    }
                }
            }          
        `)
    return(
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar/>
                <S.ProfileAuthor>{author}</S.ProfileAuthor>
                <S.ProfilePosition>{position}</S.ProfilePosition>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>
    )    
}

/* Exemplo de outra forma de renderizar os dados da query.
const Profile = () => (
    <StaticQuery
        query={graphql`
            query MySiteMetadata {
                site {
                siteMetadata {
                    author
                    description
                    position
                    }
                }
            }          
        `}
        render={({
                site:{siteMetadata:{author,position,description}}) => (
            <div className="Profile-wrapper">
                <h1>{author}</h1>
                <h2>{position}</h2>
                <p>{description}</p>
            </div>
        )}
    />
    
)*/

export default Profile