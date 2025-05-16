import type { NextPage } from "next";
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {Program, Idl, AnchorProvider, setProvider} from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import {usePrivy, useLoginWithEmail, useSolanaWallets} from '@privy-io/react-auth'
import idl from '../idl/idl.json'
import {AgriVerse} from '../types/idl'
import { Keypair, PublicKey, VersionedTransaction, Transaction, sendAndConfirmTransaction, Connection} from "@solana/web3.js";
import {Amaranth} from 'next/font/google'
import {Form, Button} from 'react-bootstrap'
import { Router } from "next/router";

const amaranth = Amaranth({subsets : ['latin'], weight: '400'})

const Home: NextPage = () => {
  const {ready} = usePrivy()
  const router = useRouter()
  const {createWallet} = useSolanaWallets()
  const solConnection = new Connection("https://api.devnet.solana.com", "confirmed")
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
  const [cropType, setCropType] = useState('')
  
  const addCrop = async() => {
    //const transaction = new Transaction()
    const transaction = await program.methods
      .addCrop(cropName, cropType)
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
        {/*<div>
          <div className="border hover:border-slate-900 rounded">
            <WalletMultiButton style={{}} />
          </div>
        </div>  */}
        <center>
          <div className={`${styles.avform} ${amaranth.className}`}>
            {/*  <Form>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Enter a crop" onChange={(e:any)=>setCropName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Select defaultValue={'Select Type'}>
                  <option disabled>Select Type</option>
                  <option value="fruit">Fruit</option>
                  <option value="vegetable">Vegetable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4">
                <div className={styles.avbtn}>
                  <Button variant="custom" onClick={addCrop}>Add</Button>
                </div>
              </Form.Group>
            </Form> */}
            <h2>Welcome to AgriVerse</h2>
            <Form>
              <Form.Group className="mb-3">
                <div className={styles.avbtn}>
                  <Button variant="custom" onClick={() => router.push(`/farm/add`)}>Add Farm</Button>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <div className={styles.avbtn}>
                  <Button variant="custom" onClick={() => router.push(`/crop/add`)}>Add Crop</Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </center>
      </main>
  );
};

export default Home;
