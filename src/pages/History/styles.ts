import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const HistoryHeader = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: 2rem;
    h3 {
      color: ${theme.color.yellow[700]};
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
    }
  `}
`

export const EmptyMessage = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border: 1px solid ${theme.color.brand[500]};
    padding: 4rem;
    border-radius: 0.5rem 4rem;
  `}
`

export const ButtonContainer = styled(motion.div)`
  ${() => css`
    max-width: 475px;
  `}
`

export const ResposiveEmptyMessage = styled(motion.div)`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2rem;
    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  `}
`
