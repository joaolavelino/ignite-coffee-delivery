import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const StyledHistoryCard = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.color.gray[300]};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    transition: 500ms;
    * img {
      height: 2rem;
    }
  `}
`
