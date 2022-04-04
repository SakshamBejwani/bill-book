import React from 'react'
import {useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
function Dashboard_navbar() {

  const[mobile_number, setMobile_number] = useState(null)
  const [ redirect, setRedirect ] = useState(0)
  
  
  const logout = () => {
    localStorage.removeItem("billBookMobileNumber")
    setRedirect(999)
  }

  useEffect(() => {
    if(localStorage.getItem("billBookMobileNumber"))
    {
      setMobile_number(localStorage.getItem("billBookMobileNumber"))
    }
    else {
      setRedirect(888)
    }
  }, [])
  
  return (
    <> 
    {redirect > 0 ? (
        <> <Navigate to="/" /> </>
     ) : ( 
         <> 
     

        <nav class="navbar navbar-light  border-bottom">
            <div class="container-fluid">
                <a class="navbar-brand">+91 {mobile_number}</a>
                <form class="d-flex">
                
                <h5 type="submit" onClick={logout}>Logout</h5>
                </form>
            </div>
            </nav>
    </>
     )}
     </>
  )
}

export default Dashboard_navbar