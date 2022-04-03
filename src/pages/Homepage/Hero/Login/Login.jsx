import React from 'react'
import {useState } from 'react'
function Login() {
    const [isClicked, setIsClicked] = useState(false)

    

  return (
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
                <input type="text" class="form-control" placeholder="Enter Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" />
                </div>
                
            </div>
            <div class="my-2">
                <div class="form-label  text-secondary">
                    Enter OTP
                </div>
                <input type="text" class="form-control" placeholder="One Time Password" aria-label="One Time Password" aria-describedby="basic-addon1" />
                <div class="mt-2 text-secondary">
                {isClicked ? (<>
                    <h6>Resend OTP in <strong class="resend-otp">00: 59</strong> seconds</h6>
                    </>):(<></>)}
                </div>
            </div>
            
            
            
        </div>
        <div class=" w-100">
                <div>{isClicked}</div>
                <button type="button" class="btn btn-secondary py-2 w-100" onClick={()=> setIsClicked(true)}>Login</button>
            </div>
    </div>
  )
}

export default Login