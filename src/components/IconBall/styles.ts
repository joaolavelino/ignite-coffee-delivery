import styled, { css } from 'styled-components'

export interface IconBallStylesProps {
  color: 'brand' | 'yellow' | 'gray'
  tone: 300 | 500 | 700
}

export const BallWrapper = styled.div<IconBallStylesProps>`
  ${({ theme, color = 'brand', tone = 500 }) => css`
    min-width: 32px;
    width: 32px;
    min-height: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color[color][tone]};
    color: white;
    border-radius: 50%;
  `}
`
