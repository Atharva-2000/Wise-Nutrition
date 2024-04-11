"use client"

import React, { useState } from 'react'
import styles from './Login.module.scss'
import { labels } from '@/utils/constants'
import InputField from '../InputField/InputField'
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton'

const Login = ({user, changePage}) => {

    const {LOG_IN, SIGN_UP, FORGOT_PASSWORD, FORM_LABELS, PLACEHOLDERS} = labels

    const empty_user_details_obj = {username: '', password: ''}

    const [userDetails , setUserDetails] = useState(empty_user_details_obj)

    const handleInputChange = (name, value)=>{
        setUserDetails({...userDetails, [name]: value})
    }

    const sumbmitdata = ()=>{
        console.log(userDetails);
        setUserDetails(empty_user_details_obj)
    }

  return (
    <div className={`${styles.login_form}`}>
        <p className={`${styles.title}`}>{LOG_IN}</p>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'text'} label={FORM_LABELS.USERNAME} name={"username"} placeholder={PLACEHOLDERS.USERNAME} value={userDetails.username} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'password'} label={FORM_LABELS.PASSWORD} name={"password"} placeholder={PLACEHOLDERS.PASSWORD} value={userDetails.password} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.forgot_password_link_container}`}>
            <p 
               className={`${styles.forgot_password_link}`}
               onClick={()=>{
                  changePage('forgot-password')
                  setUserDetails(empty_user_details_obj)
               }}>
               {FORGOT_PASSWORD}
            </p>
        </div>
        <div style={{marginTop: '1.75rem'}}>
              <PrimaryButton title={LOG_IN} onClick={()=>{sumbmitdata()}}/>
        </div>
        {
            user!=='admin' && 
             <div className={`${styles.singup_link_container}`}>
                <p>Do not have an account?</p>
                <p 
                className={`${styles.singup_link}`} 
                onClick={()=>{
                    changePage('sign-up')
                    setUserDetails(empty_user_details_obj)
                }}>
                {SIGN_UP}
                </p>
             </div>
        }
    </div>
  )
}

export default Login
