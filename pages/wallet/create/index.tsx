import React, {useState, useEffect} from 'react'
import styles from '../../../styles/Home.module.css'
import {useSolanaWallets} from '@privy-io/react-auth'
import {Amaranth} from 'next/font/google'
import {Button} from 'react-bootstrap'

const amaranth = Amaranth({subsets : ['latin'], weight: '400'})

export default function Create(){
  const {createWallet} = useSolanaWallets()
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const createWalletFunc = () => {
    const wallet = createWallet()
    console.log(wallet)
  }
  return(
    <>
      <div className={amaranth.className}>
        <center>
          <div className={`${styles.avform}`}>
             <h2>Create A Solana Wallet</h2>
             <div className={styles.avbtn}>
               <Button variant="custom" onClick={createWalletFunc}>Create</Button>
             </div>
          </div>
        </center>
      </div>
    </>
  )
}