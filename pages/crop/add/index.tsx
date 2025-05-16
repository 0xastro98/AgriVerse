import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {Program, Idl, AnchorProvider, setProvider} from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import {usePrivy, useLoginWithEmail, useSolanaWallets} from '@privy-io/react-auth'
import idl from '../../../idl/idl.json'
import {AgriVerse} from '../../../types/idl'
import { Keypair, PublicKey, VersionedTransaction, Transaction, sendAndConfirmTransaction, Connection} from "@solana/web3.js";
import {Amaranth} from 'next/font/google'
import {Form, Button} from 'react-bootstrap'
import { Router } from "next/router";

const amaranth = Amaranth({subsets: ['latin'], weight: '400'})

export default function Add(){
  const router = useRouter()
  const [cropName, setCropName] = useState()
  const [cropType, setCropType] = useState()

  /*
  const addCropFunc = () => {
    const transaction = await program.methods
    .addCrop(cropName, cropType)
    .accounts({cropInfo: publicKey, systemProgram: programId})
    .rpc();
  }
  */
  return(
    <>
      <center>
        <div className={amaranth.className}>
          <div className={styles.avform}>
            <h2>Add A Crop To AgriVerse</h2>
            <Form>
              <Form.Group className="mb-4">
                <Form.Control type='text' onChange={(e:any) => setCropName(e.target.value)} placeholder="Enter a crop" />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Select defaultValue='Select Crop Type'>
                  <option disabled value='Select Crop Type'>Select Crop Type</option>
                  <option value='Fruit'>Fruit</option>
                  <option value='Vegetable'>Vegetable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-4'>
                <div className={styles.avbtn}>
                  <Button variant="custom">Add</Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </center>
    </>
  )
}