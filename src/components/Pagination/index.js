import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPage, prevPage, nextPage }) => (
  <S.PaginationWarapper>
    {!isFirst && <Link to={prevPage}>página anterior</Link>}
    <p>
      {currentPage} de {numPage}
    </p>
    {!isLast && <Link to={nextPage}>próxima página</Link>}
  </S.PaginationWarapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPage: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
