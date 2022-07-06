// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/index.css';
import { Layout } from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import { MdxComponentsProvider } from '../context/mdxContext';

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


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


export default MyApp;






// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//   <ThemeProvider attribute="class">
//     <MdxComponentsProvider>
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     </MdxComponentsProvider>
//   </ThemeProvider>
//   )
// }


// export default MyApp;
