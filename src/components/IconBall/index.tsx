import { BallWrapper, IconBallStylesProps } from './styles'

export interface IconBallProps extends IconBallStylesProps {
  children: React.ReactNode
}
export const IconBall: React.FC<IconBallProps> = ({
  children,
  color,
  tone,
}) => {
  return (
    <BallWrapper color={color} tone={tone}>
      {children}
    </BallWrapper>
  )
}
