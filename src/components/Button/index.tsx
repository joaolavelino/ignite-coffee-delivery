import React, { ReactNode } from 'react'
import { ButtonContainer, ButtonStyleProps } from './styles'
export interface ButtonProps extends ButtonStyleProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  color = 'brand',
  size = 'md',
  full = false,
  round = false,
  square = false,
  disabled = false,
  onClick,
  type = 'button',
}) => {
  return (
    <ButtonContainer
      color={color}
      variant={variant}
      size={size}
      full={full}
      round={round}
      disabled={disabled}
      square={square}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonContainer>
  )
}
