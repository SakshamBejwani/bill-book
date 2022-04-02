import React from 'react'
import styled from 'styled-components'
function SilverPlan() {
  return (
    <Container>
        <div class="row container-fluid  d-flex flex-column">
            <div class="row w-100 px-5 mt-2 pt-2">
                <img src="icn_pricing_crown.svg" alt="" />
            </div>
            <div class="row px-5 pt-2">
                <h6 class="fw-bolder">Silver Plan</h6>
            </div>
            <div class="row px-5  d-flex align-items-end justify-content-start">
                <del class="pb-1 mr-2">₹ 1299</del> 
                <h3 class="mr-1 silver-text">₹ 799</h3>
                <h6>/Year</h6>
            </div>
        </div>
        <div class="row bg-indigo d-flex align-items-center justify-content-center mx-1 my-3">
            <img src = "icn_devices.svg" alt ="" />
            <h6 class="silver-text pt-1 mx-2">Mobile + Desktop</h6>
        </div>
        <div class="row container-fluid  d-flex flex-column">
            <div class="row w-100 px-5 pt-2 d-flex align-items-start justify-content-start">
                <img src="icn_ic_check-fill.svg" alt="" class=" mr-2" />
                <h6>Unlimited Stock Adjustment</h6>
            </div>
            <div class="row w-100 px-5 pt-2 d-flex align-items-start justify-content-start">
                <img src="icn_ic_check-fill.svg" alt="" class=" mr-2" />
                <h6>GST Reports, Profits & Loss Reports</h6>
            </div>
            <div class="row w-100 pl-5 pt-2 d-flex align-items-start justify-content-start">
                <img src="icn_ic_check-fill.svg" alt="" class=" mr-2" />
                <h6>Remove myBillBook logo from Invoice</h6>
            </div>
            <div class="row w-100 px-5 pt-2 d-flex align-items-start justify-content-start">
                <img src="icn_ic_check-fill.svg" alt="" class=" mr-2" />
                <h6>Only Mobile Device Supported</h6>
            </div>
            <div class="row w-100 px-5 py-2 mb-2 d-flex align-items-start justify-content-start">
                <img src="icn_ic_check-fill.svg" alt="" class=" mr-2" />
                <h6>+5 more Features.</h6>
            </div>
            
        </div>
    </Container>
  )
}

export default SilverPlan

const Container = styled.div`
    /* width: 100%;
    height: 100%; */
    min-height: 45vh;
    cursor: pointer;
    border: 1px solid darkblue;
    border-radius: 5px;
    background-color: white;
    
`