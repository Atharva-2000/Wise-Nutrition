"use client";

import { cities, labels, regions } from '@/utils/constants'
import React, {useState} from 'react'
import InputField from '../InputField/InputField'
import styles from './SignUp.module.scss'
import MultiLineInputField from '../MultilineInputField/MultiLineInputField';
import Dropdown from '../Dropdown/Dropdown';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';

const SignUp = ({user, changePage}) => {

    const {LOG_IN, SIGN_UP, FORM_LABELS, PLACEHOLDERS} = labels

    const empty_user_details_obj = {firstname: '', lastname: '', email: '', phone: '', city: cities[0], region: regions['Pune'][0], address: '', capacity: '', password: '', confirm_password: ''}

    const [userDetails , setUserDetails] = useState(empty_user_details_obj)

    const handleInputChange = (name, value)=>{
        setUserDetails({...userDetails, [name]: value})
    }

    const sumbmitdata = ()=>{
        console.log(userDetails);
        setUserDetails(empty_user_details_obj)
    }

  return (
    <div className={`${styles.sign_up_form}`}>
        <p className={`${styles.title}`}>{SIGN_UP}</p>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'text'} label={FORM_LABELS.FIRST_NAME} name={"firstname"} placeholder={PLACEHOLDERS.FIRST_NAME} value={userDetails.firstname} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'text'} label={FORM_LABELS.LAST_NAME} name={"lastname"} placeholder={PLACEHOLDERS.LAST_NAME} value={userDetails.lastname} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'email'} label={FORM_LABELS.EMAIL} name={"email"} placeholder={PLACEHOLDERS.EMAIL} value={userDetails.email} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'number'} label={FORM_LABELS.PHONE} name={"phone"} placeholder={PLACEHOLDERS.PHONE} value={userDetails.phone} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <Dropdown list={cities} label={FORM_LABELS.CITY} name={'city'} value={userDetails.city} onChange={handleInputChange} />  
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <Dropdown list={regions[userDetails.city]} label={FORM_LABELS.REGION} name={'region'} value={userDetails.region} onChange={handleInputChange} />  
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <MultiLineInputField label={FORM_LABELS.ADDRESS} name={"address"} placeholder={PLACEHOLDERS.ADDRESS} value={userDetails.address} onChange={handleInputChange}/>
        </div>
        {
            user==='seller' && <div className={`${styles.inputfield_wrapper_container}`}>
              <InputField type={'number'} label={"Enter Capacity"} name={"capacity"} placeholder={"Capacity....."} value={userDetails.capacity} onChange={handleInputChange}/>
            </div>
        }
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'password'} label={FORM_LABELS.PASSWORD} name={"password"} placeholder={PLACEHOLDERS.PASSWORD} value={userDetails.password} onChange={handleInputChange}/>
        </div>
        <div className={`${styles.inputfield_wrapper_container}`}>
             <InputField type={'password'} label={FORM_LABELS.CONFIRM_PASSWORD} name={"confirm_password"} placeholder={PLACEHOLDERS.CONFIRM_PASSWORD} value={userDetails.confirm_password} onChange={handleInputChange}/>
        </div>
        <div style={{marginTop: '2rem'}}>
              <PrimaryButton title={SIGN_UP} onClick={()=>{sumbmitdata()}}/>
        </div>
        <div className={`${styles.login_link_container}`}>
            <p>Do not have an account?</p>
            <p 
               className={`${styles.login_link}`} 
               onClick={()=>{
                 changePage('login')
                 setUserDetails(empty_user_details_obj)
               }}>
               {LOG_IN}
            </p>
        </div>
    </div>
  )
}

export default SignUp
