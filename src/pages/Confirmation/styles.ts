import styled, { css } from 'styled-components'

export const OrderInfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    border: 1px solid;
    border-color: ${theme.color.brand[500]};
    border-radius: 2rem 0.5rem;
    padding: 4rem;

    @media screen and (max-width: 1250px) {
      max-width: 492px;
    }

    @media screen and (max-width: 580px) {
      margin: 0 20rem;
      width: 100%;
      padding: 2rem;
    }
  `}
`
export const HeaderConfirmation = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    h5 {
      color: ${theme.color.yellow[700]};
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
  `}
`

export const RespnsiveContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;
    width: 100%;
  `}

  @media screen and (max-width: 1400px) {
    gap: 8rem;
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  img {
    max-width: 475px;
    @media screen and (max-width: 1250px) {
      width: 100%;
    }
  }
`
export const ButtonContainer = styled.div`
  ${() => css`
    width: 100%;
    max-width: 475px;
    margin: 0 auto;
  `}
`
