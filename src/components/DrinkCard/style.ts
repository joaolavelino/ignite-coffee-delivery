import styled, { css } from 'styled-components'

export const CardContainer = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.color.gray[200]};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.5rem 0 1.5rem 0;
    padding: 7rem 1.5rem 1.5rem;
    position: relative;

    img {
      position: absolute;
      top: -24px;
    }
  `}
`
