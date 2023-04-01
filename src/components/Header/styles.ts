import styled, { css } from 'styled-components'

export const HeaderContainer = styled.li`
  ${() => css`
    padding: 2rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      visibility: hidden;
      font-size: 0;
      line-height: 0;
    }
    @media screen and (max-width: 1024px) {
      padding: 2rem 5rem;
    }
    @media screen and (max-width: 720px) {
      padding: 2rem 2rem;
    }
  `}
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      gap: 1rem;
    }
  `}
`

export const NavigationItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.color.yellow[300]};
    padding: 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    transition: 200ms;
    border: 1px solid ${theme.color.yellow[300]};
    a {
      color: ${theme.color.yellow[700]};
    }
    &:hover {
      background-color: transparent;
      border: 1px solid ${theme.color.yellow[500]};
    }
  `}
`

export const OrderItemQuatity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;
    color: white;
    background-color: ${theme.color.yellow[700]};
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    font-size: small;
  `}
`
