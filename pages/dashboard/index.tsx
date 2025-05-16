import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {usePrivy, useSolanaWallets} from '@privy-io/react-auth'
import {useRouter} from 'next/router'

export default function Dashboard(){
  const router = useRouter()
  const {ready, authenticated} = usePrivy()

  useEffect(() => {
    
  })
  return(
    <>
      <div className={styles.avpage}>
        {ready && authenticated ? 
          <>
            
          </>
          : null
        }
      </div>
    </>
  )
}