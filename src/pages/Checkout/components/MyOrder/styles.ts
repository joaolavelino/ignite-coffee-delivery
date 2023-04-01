import styled, { css } from 'styled-components'

export const OrderContainer = styled.div`
  ${({ theme }) => css`
    width: 500px;
    background-color: ${theme.color.gray[200]};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem 0.5rem 2rem 0.5rem;

    @media screen and (max-width: 520px) {
      width: 100%;
      padding: 20px;
    }
  `}
`
