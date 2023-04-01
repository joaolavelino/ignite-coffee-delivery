import styled, { css } from 'styled-components'

export interface ButtonWrapperProps {
  active: boolean
}

export const StyledSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    padding-bottom: 2rem;

    svg {
      color: ${theme.color.brand[500]};
    }
  `}
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ theme, active }) => css`
    flex: 1;
    width: 100%;
    border: 1px solid ${active ? theme.color.brand[500] : 'transparent'};
    border-radius: 0.25rem;
  `}
`
