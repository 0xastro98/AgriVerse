import type { NextPage } from "next";
import React, {useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {Program, Idl, AnchorProvider, setProvider} from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import idl from '../idl/idl.json'
import {AgriVerse} from '../types/idl'
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import {Cabin} from 'next/font/google'
import {Form, Button} from 'react-bootstrap'

const cabin = Cabin({subsets : ['latin']})

const Home: NextPage = () => {
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
    try {
      const transaction = await program.methods
        .addCrop(cropName, 'fruit')
        .accounts({
          cropInfo: publicKey,
          owner: publicKey,
          systemProgram: SystemProgram.programId
        })
        .transaction();
      
      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      
      const signature = await sendTransaction(transaction, connection);
      console.log('Transaction sent. Signature:', signature);
      
      const confirmation = await connection.confirmTransaction({
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
      });
      
      if (confirmation.value.err) {
        throw new Error('Transaction failed');
      }
      
      console.log('Transaction confirmed');
      alert('Crop added successfully!');
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Failed to add crop: ' + error.message);
    }

      const sig =  await sendTransaction(tx, connection {skipPreflight: true});
      alert(sig)
      console.log(sig)
  }
    else{
      const sig =  await sendTransaction(transaction, connection /*{skipPreflight: true});
      alert(sig)
      console.log(sig) 
    } */
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
