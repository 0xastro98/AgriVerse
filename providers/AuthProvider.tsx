import React from 'react'
import {PrivyProvider} from '@privy-io/react-auth'

export default function Providers({children} : {children: React.ReactNode}){
  return(
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
          embeddedWallets: {
              solana: {
                  createOnLogin: 'all-users',
              },
          },
      }}
    >
      {children}
    </PrivyProvider>
  )
}