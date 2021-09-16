import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toasst(props) {
    function ToastMessage() {
        const [ showToast, setShowToast ] = useState(false)
        useEffect(() => {
           setShowToast(true)
           // Hides the message after 2 default seconds (configurable)
           setTimeout(() => setShowToast(false))
        }, [])
    
        return (
           showToast &&
              <div>{toast(props.message)}</div> || null
        )
    }
    
    return (
       <>
         { 
              <ToastMessage 
                  message={props.message} /> 
         }
       </>

    );
}
export default Toasst;