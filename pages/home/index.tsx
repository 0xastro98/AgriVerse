import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {usePrivy, useSolanaWallets} from '@privy-io/react-auth'
import {UserPill} from '@privy-io/react-auth/ui'

export default function Home(){
  const {ready, authenticated, user} = usePrivy()
  const {wallets} = useSolanaWallets()
  const [setUserId, setIsUserId] = useState('')
  
  return(
    <>
      <center>
        <div>
          <UserPill />
        </div>
      </center>
    </>
  )
}