// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/index.css';
import { Layout } from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class">
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </ThemeProvider>
  )
}

export default MyApp;
