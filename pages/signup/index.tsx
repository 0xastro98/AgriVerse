import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'
import {useLoginWithEmail} from '@privy-io/react-auth'

export default function SignUp(){
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const {sendCode, loginWithCode} = useLoginWithEmail()

  return(
    <>
      <center>
      <div className={styles.avform}>
        <Form>
          {isEmailSent ? 
            <>
              <Form.Group className="mb-4">
                <Form.Control type="text" onChange={(e) => setCode(e.target.value)} placeholder='Enter the code'/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button variant="primary" onClick={() => {loginWithCode({code}); setIsCodeSent(true)}}>Submit Code</Button>
              </Form.Group>
            </>
            :
            <>
              <Form.Group className="mb-4">
                <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Button variant="primary" onClick={() => {sendCode({email}); setIsEmailSent(true);}}>Request Code</Button>
              </Form.Group>
            </>
          }
        </Form>
        {/*}  <input onChange={(e) => setEmail(e.currentTarget.value)} value={email} />
        <button onClick={() => sendCode({email})}>Send Code</button>
        <input onChange={(e) => setCode(e.currentTarget.value)} value={code} />
        <button onClick={() => loginWithCode({code})}>Login</button>
        */}
    
      </div>
      </center>
    </>
  )
}