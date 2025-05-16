import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

import AppWalletProvider from "../providers/AppWalletProvider";
import AuthProvider from '../providers/AuthProvider';
import {Amaranth} from 'next/font/google'

const amaranth = Amaranth({subsets: ['latin'], weight: '400'})

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <main className={amaranth.className}>
      <AuthProvider>
        <AppWalletProvider>
          <Component {...pageProps} />
        </AppWalletProvider>
      </AuthProvider>
    </main>
  );
};

export default MyApp
