import React from 'react'
import { graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Pagination from '../components/Pagination'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPage } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPage
  const prevPage = currentPage - 1 === 1 ? '/':`/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title='Home' />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug }
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}

      <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPage={numPage} prevPage={prevPage} nextPage={nextPage}/>
    </Layout>
  )
}

export const query = graphql`
  query postList ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          id
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
