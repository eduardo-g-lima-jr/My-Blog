import React from 'react'
import * as S from './styled'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { Search } from 'styled-icons/material/Search'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Lightbulb as Light} from 'styled-icons/typicons/Lightbulb'
import { GridAlt as Grid} from 'styled-icons/boxicons-solid/GridAlt'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to='/' title='Voltar a home'>
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to='/search/' title='Pesquisar'>
        <S.MenuBarItem><Search /></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title='Mudar o tema'><Light /></S.MenuBarItem>
      <S.MenuBarItem title='Mudar a visualização'><Grid /></S.MenuBarItem>
      <S.MenuBarItem title='Ir para o topo'><Arrow /></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
