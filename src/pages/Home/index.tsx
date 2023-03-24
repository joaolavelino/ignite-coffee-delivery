import React from 'react'
import bannerImg from '../../../public/assets/banner-img.png'
import { Banner } from './components/Banner'
import { Menu } from './components/Menu'

export interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  return (
    <section>
      <Banner />
      <Menu />
    </section>
  )
}
