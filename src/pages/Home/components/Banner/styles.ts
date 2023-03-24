import styled, { css } from 'styled-components'

export const StyledBanner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    overflow: hidden;
  `}
`

export const BannerContent = styled.div`
  ${() => css`
    padding: 8rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      img {
        width: 350px;
      }
    }
  `}
`

export const BannerBG = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 0;
    top: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`
