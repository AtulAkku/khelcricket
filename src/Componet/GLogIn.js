import React from 'react';
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

const GLogIn = () => {
    const gLogin = (credentialResponse)=>{
        const cred = jwtDecode(credentialResponse.credential);
        console.log(cred.email)
    }
    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                gLogin(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default GLogIn