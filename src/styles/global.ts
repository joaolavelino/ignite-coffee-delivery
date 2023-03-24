import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

 ${({ theme }) => css`
   body {
     background-color: ${theme.color.gray[100]};
     color: ${theme.color.gray[900]};
     -webkit-font-smoothing: antialiased;
     font-family: 'Roboto', sans-serif;
     text-decoration: none;
     font-size: 1rem;
   }
   li {
     list-style: none;
   }
   a {
     text-decoration: none;
   }

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   :focus {
     outline: 0;
     box-shadow: 0 0 0 2px ${theme.color.brand[500]};
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
     font-family: 'Baloo 2', cursive;
     font-weight: 700;
   }

   h2 {
     font-size: 4rem;
     line-height: 100%;
   }

   @media screen and (max-width: 1024px) {
     h2 {
       font-size: 2rem;
     }
     h3 {
       font-size: 1.5rem;
     }
   }
   @media screen and (max-width: 1280px) {
     h2 {
       font-size: 3rem;
     }
     h3 {
       font-size: 2rem;
     }
   }
 `}
`
