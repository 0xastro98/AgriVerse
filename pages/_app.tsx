import '../styles/globals.css'
import type { AppProps } from 'next/app'

import AppWalletProvider from "../providers/AppWalletProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AppWalletProvider>
      <Component {...pageProps} />
    </AppWalletProvider>
  );
};

export default MyApp
