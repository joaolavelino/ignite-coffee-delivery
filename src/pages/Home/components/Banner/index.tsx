import React from 'react'
import { BannerBG, BannerContent, StyledBanner } from './styles'
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
            <ul>
              <li>Schnelle und einfach Bestellung</li>
              <li>Schnell und Lieferung</li>
              <li>Thermobecher</li>
              <li>Frischer kaffee</li>
            </ul>
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
