import styled, { css } from 'styled-components'

export interface ButtonStyleProps {
  variant?: 'light' | 'primary' | 'outline' | 'gray'
  color?: 'yellow' | 'brand'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  round?: boolean
  square?: boolean
  disabled?: boolean
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  ${({
    theme,
    variant = 'primary',
    color = 'brand',
    size = 'md',
    full = false,
    round = false,
    square = false,
    disabled = false,
  }) => css`
    gap: 0.5rem;
    aspect-ratio: ${round ? 1 : square ? 1 : 'free'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${variant == 'outline'
      ? 'transparent'
      : variant == 'gray'
      ? theme.color.gray[400]
      : theme.color[color][
          variant == 'light' ? 300 : color == 'yellow' ? 500 : 700
        ]};
    border-radius: ${round ? '50%' : '0.25rem'};
    padding: ${size === 'sm'
      ? '0.25rem'
      : size === 'md'
      ? '0.5rem 0.75rem'
      : size === 'lg' && '0.75rem 1.25rem'};
    display: flex;
    width: ${full && '100%'};
    align-items: center;
    transition: 200ms;
    font-weight: ${variant == 'light' || variant == 'gray' ? 400 : 600};
    font-size: ${size === 'sm'
      ? '0.8rem'
      : size === 'md'
      ? '0.75rem'
      : size === 'lg' && '0.8rem'};
    text-transform: uppercase;
    border: 1px solid;
    border-color: ${variant == 'gray'
      ? 'transparent'
      : theme.color[color][variant == 'light' ? 300 : 500]};
    color: ${variant == 'primary'
      ? 'white'
      : variant == 'gray'
      ? theme.color.gray[900]
      : theme.color[color][color == 'brand' ? 500 : 700]};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover {
      background-color: ${variant == 'outline'
        ? theme.color[color][500]
        : 'transparent'};
      border-color: ${theme.color[variant == 'gray' ? 'brand' : color][
        color == 'brand' ? 500 : 700
      ]};
      color: ${variant == 'outline'
        ? 'white'
        : theme.color[variant == 'gray' ? 'brand' : color][
            color == 'brand' ? 500 : 700
          ]};

      svg {
        color: ${theme.color[color][color == 'brand' ? 500 : 700]};
      }
    }
    svg {
      color: ${variant == 'gray'
        ? theme.color.brand[500]
        : variant == 'primary'
        ? 'white'
        : theme.color[color][color == 'brand' ? 500 : 700]};
    }
  `}
`
