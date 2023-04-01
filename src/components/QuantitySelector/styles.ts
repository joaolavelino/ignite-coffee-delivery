import styled, { css } from 'styled-components'

export const SelectorContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0.75rem;
    width: 5rem;
    border-radius: 0.25rem;
    background-color: ${theme.color.gray[400]};
    font-weight: 400;
  `}
`
export const PlusMinusButton = styled.button`
  ${({ theme }) => css`
    border: none;
    height: 1.5rem;
    outline: none;
    background-color: transparent;
    color: ${theme.color.brand[500]};
    font-size: 1.2rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  `}
`
