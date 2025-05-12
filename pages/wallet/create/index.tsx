import React, {useState, useEffect} from 'react'
import styles from '../../../styles/Home.module.css'
import {useSolanaWallets} from '@privy-io/react-auth'
import {Inter} from 'next/font/google'
import {Button} from 'react-bootstrap'

const inter = Inter({subsets : ['latin']})

export default function Create(){
  const {createWallet} = useSolanaWallets()
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const createWalletFunc = () => {
    const wallet = createWallet()
    console.log(wallet)
  }
  return(
    <>
      <center>
        <div className={`${styles.avform} ${inter.className}`}>
           <h2>Create A Solana Wallet</h2>
           <div className={styles.avbtn}>
             <Button variant="custom" onClick={createWalletFunc}>Create</Button>
           </div>
        </div>
      </center>
    </>
  )
}