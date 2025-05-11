import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {usePrivy} from '@privy-io/react-auth'

export default function Home(){
  const {ready, authenticated, user} = usePrivy()
  return(
    <>
      <center>
        <div>
      
        </div>
      </center>
    </>
  )
}