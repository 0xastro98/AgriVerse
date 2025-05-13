import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'
import {useLoginWithEmail} from '@privy-io/react-auth'
import {Inter} from 'next/font/google'
import {useRouter} from 'next/router'

const inter = Inter({subsets : ['latin']})

export default function SignUp(){
  const router = useRouter()
  const emailRef = React.createRef<HTMLInputElement>()
  const codeRef = React.createRef<HTMLInputElement>()
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const {sendCode, loginWithCode} = useLoginWithEmail()
  
  const loginFunc = () => {
    if(emailRef.current){
      emailRef.current.value = ""
    }
    sendCode({email})
    setIsEmailSent(true)
  }

  const sendCodeFunc = () => {
    if(codeRef.current){
      codeRef.current.value = ""
    }
    loginWithCode({code})
    router.push('/wallet/create')
  }
  
  return(
    <>
      <center>
      <div className={`${styles.avform} ${inter.className}`}>
        <Form>
          {isEmailSent ? 
            <>
              <h2>Create An Account On AgriVerse</h2>
              <Form.Label>Enter the code</Form.Label>
              <Form.Group className="mb-4">
                <Form.Control ref={codeRef} type="text" onChange={(e) => setCode(e.target.value)} placeholder='Enter the code'/>
              </Form.Group>
              <Form.Group className="mb-4">
                <div className={styles.avbtn}>
                  <Button variant="custom" onClick={sendCodeFunc}>Submit Code</Button>
                </div>
              </Form.Group>
            </>
            :
            <>
              <h2>Create An Account On AgriVerse</h2>
              <Form.Label>Enter a email</Form.Label>
              <Form.Group className="mb-4">
                <Form.Control ref={emailRef} type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
              </Form.Group>
              <Form.Group className="mb-4">
                <div className={styles.avbtn}>
                  <Button variant="custom" onClick={loginFunc}>Request Code</Button>
                </div>
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