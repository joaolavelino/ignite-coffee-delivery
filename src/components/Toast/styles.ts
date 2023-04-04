import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export interface ToastStyleProps {
  isError: boolean
}

export const StyledToast = styled(motion.div)<ToastStyleProps>`
  ${({ theme, isError }) => css`
    position: fixed;
    top: 0;
    left: calc(50% - 16rem);
    max-width: 32rem;
    width: 100%;
    margin: 1rem;
    padding: 1rem 2rem;
    border-radius: 1.5rem 0.5rem 1.5rem 0.5rem;
    background-color: ${theme.color[isError ? 'error' : 'success'][700]};
    color: white;
    font-weight: bolder;
    z-index: 1000;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);
    * h4 {
      flex: 1;
    }
    * button {
      border-color: white;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      color: white;
      padding: 0;

      svg {
        color: white;
      }
      &:hover {
        background-color: white;
        svg {
          color: ${theme.color.brand[500]};
        }
      }
    }
  `}
`
