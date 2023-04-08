import styled, { css } from 'styled-components'

export const StyledBanner = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 544px;
    position: relative;
    overflow: hidden;
  `}
`

export const BannerContent = styled.div`
  ${() => css`
    padding: 0;
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

    @media screen and (max-width: 870px) {
      img {
        width: 250px;
      }
    }
    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
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

export const BannerInfo = styled.ul`
  ${() => css`
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    max-width: 632px;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  `}
`
