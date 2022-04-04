import { serverApiUrl } from "../../index";

//get OTP
export const getOtp = (mobile_number, callback) => {


    let formData = new FormData();
    formData.append("mobile_number", mobile_number);
    
    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json'); 
    // headers.append('Access-Control-Allow-Origin', serverApiUrl);
    // headers.append('Access-Control-Allow-Credentials', 'true');

    fetch(serverApiUrl + "request_otp",
        {
            method: 'POST',
            // headers,
            body: formData,
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

// POST mobile number and otp to get authenticated
export const loginOtp = (mobile_number, otp_code, callback) => {


    let formData = new FormData();
    formData.append("mobile_number", mobile_number);
    formData.append("otp_code", otp_code);

    

    fetch(serverApiUrl + "authenticate",
        {
            method: 'POST',
            // headers,
            body: formData,
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}