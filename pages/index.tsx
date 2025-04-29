import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Home: NextPage = () => {
  return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="border hover:border-slate-900 rounded">
          <WalletMultiButton style={{}} />
        </div>
      </main>
  );
};

export default Home;
