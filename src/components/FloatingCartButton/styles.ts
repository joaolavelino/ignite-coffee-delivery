import styled, { css } from 'styled-components'

export const FloatingContainer = styled.div`
  ${() => css`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 20;
    transition: 500ms;
  `}
`
