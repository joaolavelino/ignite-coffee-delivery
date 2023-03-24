import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrdersContextProvider } from './context/OrderContext'
import { Router } from './Router'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <OrdersContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrdersContextProvider>
    </ThemeProvider>
  )
}

export default App
