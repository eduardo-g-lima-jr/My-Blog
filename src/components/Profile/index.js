import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar'

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
        <div className="Profile-wrapper">
            <Avatar/>
            <h1>{author}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )    
}

/*
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