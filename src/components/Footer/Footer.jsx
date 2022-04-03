import React from 'react'

function Footer() {
  return (
    <><div class="container-fluid pb-5">
        <div class="row w-100 px-5">
        <div class="row w-100 px-5 mt-5 d-flex justify-content-center">
            <div class="col-4 px-5 pb-5">
                <div class="footer-title h4 fw-bold my-3">Get in Touch</div>
                <div class="h5">help@flobiz.in</div>
                <div class="h3">+91 74004 17400</div>
                <div class="mt-3">
                    <button type="button" class="btn px-3 py-1 mr-3 whatsapp-button">
                            <img class="mr-2" src="icn_whatsapp.svg" alt="" />
                            WhatsApp us
                    </button>
                    <button type="button" class="btn px-3 py-1 chat-button">
                            <img class="mr-2" src="icn_chat with us.svg" alt="" />
                            Chat with us
                    </button>
                    

                </div>

            </div>
            <div class="col-2 pb-5">
                <div class="footer-title h4 fw-bold my-3">Information</div>
                <p>Refund Policy</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="col-2 d-flex flex-column align-bottom justify-content-end">
                <p>FAQ's</p>
                <p>Pricing</p>
                <p>FloBiz's Business Group</p>
                <p>Blogs</p>
            </div>
            <div class="col-4 px-5 pb-5">
                <div class="footer-title h4 fw-bold my-3">Follow Us</div>
                <div class="social">
                    <img class="mr-2" src=" icn_youtube.svg" alt="" />
                    <img class="mx-2" src=" icn_Facebook.svg" alt="" />
                    <img class="mx-2" src=" icn_instagram.svg" alt="" />
                    <img class="mx-2" src=" icn_Twitter.svg" alt="" />
                    <img class="mx-2" src=" icn_linkedin.svg" alt="" />

                </div>
                <div class="my-3">
                    <h6>FloBooks is a product by FloBiz</h6>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Footer