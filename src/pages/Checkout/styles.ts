import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    margin-bottom: 4rem;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      gap: 4rem;
    }

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      gap: 2rem;
    }
  `}
`
export const FormPannel = styled.div`
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
