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
     color: inherit;
   }
   a:visited {
     color: inherit;
   }

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   section {
     padding: 0 10rem;
     @media screen and (max-width: 1300px) {
       padding: 0 6rem;
     }
     @media screen and (max-width: 1024px) {
       padding: 0 4rem;
     }
     @media screen and (max-width: 720px) {
       padding: 0 2rem;
     }
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
     font-family: 'Baloo 2', sans-serif;
     font-weight: 700;
   }

   h2 {
     font-size: 4rem;
     line-height: 100%;
   }
   h3 {
     font-size: 3rem;
     line-height: 100%;
   }
   h4 {
     font-size: 1.25rem;
     line-height: 100%;
   }
   h5 {
     font-size: 1.75rem;
     line-height: 100%;
   }

   input {
     padding: 0.75rem 1rem;
     font-size: 14px;
     background-color: ${theme.color.gray[300]};
     outline: none;
     border: 1px solid ${theme.color.gray[500]};
     border-radius: 0.25rem;
     flex-grow: 1;
     flex-shrink: 1;
     width: 100%;
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
