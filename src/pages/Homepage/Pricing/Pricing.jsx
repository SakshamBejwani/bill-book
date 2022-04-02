import React from 'react'
import SilverPlan from './SilverPlan'
import GoldenPlan from './GoldenPlan'
import DiamondPlan from './DiamondPlan'
function Pricing() {
  return (
        <div class="container-fluid">
            
            <div class="row  px-5 my-3 ">
                <div class="row w-100 px-5 d-flex flex-row align-items-center justify-content-between mt-5">
                    <div class="px-5">
                        <div class="pricing-hero-title px-5">
                            Now try all benifits of My BillBook app
                        </div>
                        <div class="pricing-hero-sub px-5">
                            Free for 14 days
                        </div>
                        
                    </div>
                    <div class="px-5" >
                        <img class="w-10" src="icn_moneyback.svg" alt="moneyback" /> 
                    </div>
                </div>
            </div>
        <div class="px-5">
            <div class="row stats-row my-5 px-5 d-flex align-items-center justify-content-center">
                <div class="col  mx-1 ">
                    <SilverPlan/>
                </div>
                <div class="col  mx-1">
                    <GoldenPlan/>
                </div>
                <div class="col  mx-1 ">
                    <DiamondPlan/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Pricing