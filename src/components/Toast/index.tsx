import {
  CheckCircle,
  Warning,
  WarningDiamond,
  X,
  XCircle,
} from '@phosphor-icons/react'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrderContext'

import { Button } from '../Button'
import { FlexBox } from '../FlexBox'
import { StyledToast, ToastStyleProps } from './styles'

export interface ToastProps extends ToastStyleProps {
  text: string
}
export const Toast: React.FC<ToastProps> = ({ text, isError }) => {
  const { resetError } = useContext(OrdersContext)
  return (
    <StyledToast
      isError={isError}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <FlexBox full alignItems="center" justifyContent="space-between" gap={1}>
        <Warning size={24} />
        <p>{text}</p>
        <Button onClick={resetError} variant="outline">
          <X size={12} weight="bold" />
        </Button>
      </FlexBox>
    </StyledToast>
  )
}
