import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    color: #889906;
    display: flex;
    flex-direction: column;
`
export const ProfileLink = styled(Link)`
    color: #889906;
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
        color: #1fa1f2;
    }
`
export const ProfileAuthor = styled.h1`
    front-size: 1.6rem;
    margin: 0.5rem auto 1.5rem;
`
export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
`
export const ProfileDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
`
