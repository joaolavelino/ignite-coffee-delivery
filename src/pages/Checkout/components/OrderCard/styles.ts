import styled, { css } from 'styled-components'

export const OrderCardContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.gray[400]};
    img {
      width: 64px;
      @media screen and (max-width: 520px) {
        width: 48px;
      }
    }
  `}
`
