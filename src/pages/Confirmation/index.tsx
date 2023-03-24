import React from 'react'
import { Link } from 'react-router-dom'
export interface ConfirmationProps {}
export const Confirmation: React.FC<ConfirmationProps> = () => {
  return (
    <section>
      <h2>Banner</h2>
      <h2>Confirmação</h2>
      <Link to={'/'}>Home</Link>
    </section>
  )
}
