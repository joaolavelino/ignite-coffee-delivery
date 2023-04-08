import { Clock, Coffee, Package, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import { IconBall } from '../../../../components/IconBall'
import { BannerBG, BannerContent, BannerInfo, StyledBanner } from './styles'
export interface BannerProps {}
export const Banner: React.FC<BannerProps> = () => {
  return (
    <StyledBanner>
      <BannerContent>
        <div>
          <h2>Der perfekte Kaffee, am perfekten Zeit</h2>
          <p>
            Irgendwo, irgendwann, bringt Coffee Delivery Ihnen der gertank, dass
            Sie brauchen!
          </p>
          <div>
            <BannerInfo>
              <li>
                <IconBall color="yellow" tone={700}>
                  <ShoppingCart weight="fill" size={16} />
                </IconBall>
                Schnelle und einfach Bestellung
              </li>
              <li>
                <IconBall color="gray" tone={700}>
                  <Package weight="fill" size={16} />
                </IconBall>
                Schnell und Lieferung
              </li>
              <li>
                <IconBall color="yellow" tone={500}>
                  <Coffee weight="fill" size={16} />
                </IconBall>
                Thermobecher
              </li>
              <li>
                <IconBall color="brand" tone={500}>
                  <Clock weight="fill" size={16} />
                </IconBall>
                Frischer kaffee
              </li>
            </BannerInfo>
          </div>
        </div>
        <img src="assets/banner-image.png" alt="coffee cup with beans" />
      </BannerContent>

      <BannerBG>
        <img className="banner-bg" src="assets/banner-bg.png" />
      </BannerBG>
    </StyledBanner>
  )
}
