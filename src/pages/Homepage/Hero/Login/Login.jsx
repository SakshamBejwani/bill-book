import React from 'react'
import {useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getOtp,loginOtp } from '../../../../api/Auth/Auth'
import Countdown from 'react-countdown';


function Login() {
    

    const [isClicked, setIsClicked] = useState(false)
    const [ redirect, setRedirect ] = useState(0)
    const [mobile_number, setMobile_Number] = useState(1234567890)
    const [otp_code, setOtp_code] = useState(123)
    const [resend, setResend] = useState(false)
    const getOtpHandler =() => {
        setIsClicked(true)
        getOtp(mobile_number, getOtpCallback)
    }
    const getOtpCallback = (response) => {
         
        if (response.status === 200) {
            response.json().then((data) => {
                console.log('get otp data', data)
                
            })
        }
    }

    const loginHandler = () => {
        loginOtp(mobile_number, otp_code, loginCallback)
    }
    const loginCallback = (response) => {
         
        if (response.status === 200) {
            response.json().then((data) => {
                console.log('get login data', data)
                setRedirect(999)
                localStorage.setItem("billBookMobileNumber", mobile_number)
            })
        }
    }

    
    useEffect(() => {
        if(localStorage.getItem("billBookMobileNumber"))
        {
            setRedirect(888)
        }
        
    }, [])

    const Completionist = () => <span>00.00</span>;

// Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        setResend(true)
    } else {
        // Render a countdown
        return <span>{seconds}</span>;
    }
    };

  return (
      <>  
      {redirect > 0 ? (
          <> <Navigate to="/dashboard" /> </>
       ) : ( 
           <> 
       

      <div class="custom-card m-5 p-5 rounded-xl shadow  d-flex flex-column align-items-center justify-content-around">
        <div class="h3 card-title fw-bold w-100 mb-1">
            Login in to myBillbook
        </div>
        <div class="input-group d-flex flex-column ">
            <div class="form-label text-secondary">
                    Enter Mobile Number
                </div>
            <div class="my-2">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">+91</span>
                </div>
                <input type="text" class="form-control" placeholder="Enter Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" onChange={(e)=>setMobile_Number(e.target.value) } />
                </div>
                
            </div>
            
            <div class="mt-2">
                <div class="form-label  text-secondary">
                    Enter OTP
                </div>
                <input type="text" class="form-control" placeholder="One Time Password" aria-label="One Time Password" aria-describedby="basic-addon1"  onChange={(e)=>setOtp_code(e.target.value) }/>
                <div class="mt-2 text-secondary">
                
                </div>
            </div>
            
            
            
        </div>
        {isClicked ? (<>
            {resend ? (
            <>
            <button onClick={getOtpHandler} class="btn resend-btn">Resend OTP</button>
            <button type="button" class="btn btn-secondary py-2 w-100" onClick={loginHandler}>Login</button>
            </>
            ) : (
            <>


            
                    <h6 class="w-100">Resend OTP in <strong class="resend-otp">
                    <Countdown
                        date={Date.now() + 59000}
                        renderer={renderer}
                    />
                    </strong> seconds</h6>
                    <div class=" w-100">
                
                        
                            <button type="button" class="btn btn-secondary py-2 w-100" onClick={loginHandler}>Login</button>
                        
                    </div>
                    </>)}
                    </>

                    )
                    :
                    (<>
                        <div class=" w-100">
                
                        
                            <button type="button" class="btn btn-secondary py-2 w-100" onClick={getOtpHandler}>Get OTP</button>
                        
                    </div>

                    </>
                    )}
        
    </div>
    </>
       )}
    </>
  )
}

export default Login