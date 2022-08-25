import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import { MantineProvider, MantineTheme, ColorSchemeProvider, ColorScheme } from '@mantine/core';

import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value ? value : colorScheme === 'light' ? 'dark' : 'light');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
