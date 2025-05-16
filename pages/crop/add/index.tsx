import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from '../../../styles/Home.module.css'
import {Amaranth} from 'next/font/google'
import {Form, Button} from 'react-bootstrap'

const amaranth = Amaranth({subsets: ['latin'], weight: '400'})

export default function Add(){
  const router = useRouter()
  const [cropName, setCropName] = useState()
  const [cropType, setCropType] = useState()

  const addCropFunc = () => {
  }
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
                  <
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </div>
      </center>
    </>
  )
}