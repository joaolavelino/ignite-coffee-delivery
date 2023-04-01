import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 425px) {
      flex-direction: column reverse;
      gap: 4rem;
    }
  `}
`
export const FormPannel = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
    background-color: ${theme.color.gray[200]};
    padding: 40px;
    border-radius: 2rem 0.5rem 2rem 0.5rem;
  `}
`
