import styled, { css } from 'styled-components'

export const DrinkCard = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.color.gray[400]};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.5rem 0 1.5rem 0;
    padding: 7rem 2rem 2rem;
    position: relative;

    img {
      position: absolute;
      top: -24px;
    }
  `}
`

export const DrinkMenu = styled.ul`
  ${({ theme }) => css`
    background-color: ${theme.color.gray[300]};
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 2rem;
  `}
`
