import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${theme.color.gray[400]};

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      @media screen and (max-width: 1400px) {
        gap: 0.5rem;
      }
    }

    * .input-line {
      width: 100%;
      display: flex;
      flex-direction: row;
      @media screen and (max-width: 1400px) {
        flex-direction: column;
      }
      @media screen and (max-width: 1100px) {
        flex-direction: row;
      }
      @media screen and (max-width: 640px) {
        flex-direction: column;
      }
      gap: 0.5rem;
    }

    div .left-column {
      display: flex;
      width: 200px;
      min-width: 200px;
      @media screen and (max-width: 1400px) {
        width: 100%;
      }
    }
    div .right-column {
      width: 110px;
      display: flex;
      @media screen and (max-width: 1400px) {
        width: 100%;
      }
    }
    svg {
      color: ${theme.color.yellow[700]};
    }
  `}
`
