import React from 'react'
import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to='/slug/'>
    <S.PostItemWrapper>
      <S.PostItemTag backgroud='#47650b'>Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de julho de 2019.</S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao Medium: tenha sua própria plataforma
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de 
          soluções com o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
