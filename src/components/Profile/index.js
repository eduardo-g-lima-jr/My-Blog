import React from "react"
import { StaticQuery, grafhql } from "gatsby"

const Profile = () => (
    <StaticQuery
        query={grafhql`
            query MySiteMetadata {
                site {
                siteMetadata {
                    author
                    description
                    title
                    }
                }
            }          
        `}
        render={data => (
            <div className="Profile-wrapper">
                <h1>{data.site.siteMetadata.author}</h1>
                <h2>{data.site.siteMetadata.title}</h2>
                <p>{data.site.siteMetadata.description}</p>
            </div>
        )}
    />
    
)

export default Profile