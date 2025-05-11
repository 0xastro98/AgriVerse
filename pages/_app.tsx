import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

import AppWalletProvider from "../providers/AppWalletProvider";
import AuthProvider from '../providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <AppWalletProvider>
        <Component {...pageProps} />
      </AppWalletProvider>
    </AuthProvider>
  );
};

export default MyApp
