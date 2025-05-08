import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {Program, Idl, AnchorProvider, setProvider} from '@coral-xyz/anchor';
import { useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import idl from '../idl/idl.json'
import {AgriVerse} from '../types/idl'
import { PublicKey } from "@solana/web3.js";

const Home: NextPage = () => {
  const { connection } = useConnection()
  const {sendTransaction} = useWallet()
  const programId = new PublicKey("5F8HYzSYBSzHKRaPkB2L2k8EVGu6kQFk4wBdF7bFAXoq")
  const wallet = useAnchorWallet()
  const provider = new AnchorProvider(connection, wallet, {})
  setProvider(provider)
  const program = new Program(idl as AgriVerse, provider)


  const addCrop = async(e:any) => {
    const transaction = await program.methods
      .add_crop('crop')
      .accounts({})
      .transaction();

    await sendTransaction(transaction, connection);
  }
  return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="border hover:border-slate-900 rounded">
          <WalletMultiButton style={{}} />
        </div>
      </main>
  );
};

export default Home;
