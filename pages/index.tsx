import type { NextPage } from "next";
import React, {useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {Program, Idl, AnchorProvider, setProvider} from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import {usePrivy, useLoginWithEmail, useSolanaWallets} from '@privy-io/react-auth'
import idl from '../idl/idl.json'
import {AgriVerse} from '../types/idl'
import { Keypair, PublicKey, VersionedTransaction, Transaction, sendAndConfirmTransaction} from "@solana/web3.js";
import {Cabin} from 'next/font/google'
import {Form, Button} from 'react-bootstrap'

const cabin = Cabin({subsets : ['latin']})

const Home: NextPage = () => {
  const {ready} = usePrivy()
  const {createWallet} = useSolanaWallets()
  const sender = Keypair.generate()
  const { connection } = useConnection()
  const {sendTransaction} = useWallet()
  const {publicKey} = useWallet()
  const programId = new PublicKey("6Cnbn9dN11GXt9dhuR9SNzPQTUnJSApr6DWFrstzs7R4")
  const wallet = useAnchorWallet()
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed'
  })
  setProvider(provider)
  const program = new Program(idl as AgriVerse, provider)
  const [cropName, setCropName] = useState('')
 
  const addCrop = async() => {
    //const transaction = new Transaction()
    const transaction = await program.methods
      .addCrop(cropName, 'fruit')
      .accounts({cropInfo: publicKey, systemProgram: programId})
      .rpc();
    //transaction.add(instruction)
   // const {blockhash} = await connection.getLatestBlockhash('finalized')
    //transaction.recentBlockhash = blockhash
    //transaction.feePayer = publicKey
    //const signedTransaction = await signTransaction(transaction) // From @solana/wallet-adapter-react
   /* const {blockhash} = await connection.getLatestBlockhash()
    transaction.recentBlockhash = blockhash
    transaction.sign(sender) */
    //await sendTransaction(transaction, connection)
    console.log(transaction)
    
  }
  return (
      <main className="flex items-center justify-center min-h-screen">
        <div>
          <div className="border hover:border-slate-900 rounded">
            <WalletMultiButton style={{}} />
          </div>
        </div> 
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter a crop" onChange={(e:any)=>setCropName(e.target.value)}/>
              <Button variant="primary" onClick={addCrop}>Add</Button>
            </Form.Group>
            
          </Form>
        </div>
      </main>
  );
};

export default Home;
