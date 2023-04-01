import styled, { css } from 'styled-components'

export const StyledInput = styled.input`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 0.25rem 1rem;
  `}
`
