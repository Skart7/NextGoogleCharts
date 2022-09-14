import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ProviderStore } from '../appStore'
import { GlobalStyles, useTheme } from '../ui'

function MyApp({ Component, pageProps }: AppProps) {

  const theme = useTheme('dark')

  return (
      <ThemeProvider theme={theme}>
      <ProviderStore>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ProviderStore>
      </ThemeProvider>
  )
}

export default MyApp
