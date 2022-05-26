// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/index.css';
import { Layout } from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import { MdxComponentsProvider } from '../context/mdxContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class">
    <MdxComponentsProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </MdxComponentsProvider>
  </ThemeProvider>
  )
}

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <MdxComponentsProvider>
//       <ThemeProvider attribute="class">
    
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
    
//       </ThemeProvider>
//     </MdxComponentsProvider>
//   )
// }

export default MyApp;
