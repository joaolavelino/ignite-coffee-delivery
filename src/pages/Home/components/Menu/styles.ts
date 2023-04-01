import styled, { css } from 'styled-components'

export const DrinkMenu = styled.ul`
  ${() => css`
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 2rem;
  `}
`
