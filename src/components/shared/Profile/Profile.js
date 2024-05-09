"use client"

import React, {useState, useEffect} from 'react'
import styles from './Profile.module.scss'
import profileIcon from '../../../assets/profile-icon-2.svg'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import { cities, labels, regions } from '@/utils/constants';
import InputField from '../InputField/InputField';
import Dropdown from '../Dropdown/Dropdown';
import MultiLineInputField from '../MultilineInputField/MultiLineInputField'
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton'
import OulinedButton from '../Button/OutlinedButton/OutlinedButton'

const Profile = ({user, profileData, saveDetails}) => {

    const {FORM_LABELS, PLACEHOLDERS} = labels

    const [enableEditing, setEnableEditing] = useState(false)

    const [updatedDetails, setUpdatedDetails] = useState(profileData)

    useEffect(()=>{
        setUpdatedDetails({...profileData})
    },[enableEditing])

    const handleInputChange = (name, value)=>{
        setUpdatedDetails({...updatedDetails, [name]: value})
    }

  return (
    <div className={styles.profile_page}>
          <p className={styles.title}>My Profile</p>
          <div className={styles.form_container}>
                <Image src={profileIcon} alt='Profile Icon' className={styles.profile_icon}/>
                <div className={styles.form_field_row}>
                    <div className={styles.form_field}>
                        <InputField type={'text'} label={FORM_LABELS.FIRST_NAME} name={"firstname"} placeholder={PLACEHOLDERS.FIRST_NAME} value={updatedDetails.firstname} onChange={handleInputChange} disabled={!enableEditing}/>
                    </div>
                    <div className={styles.form_field}>
                        <InputField type={'text'} label={FORM_LABELS.LAST_NAME} name={"lastname"} placeholder={PLACEHOLDERS.LAST_NAME} value={updatedDetails.lastname} onChange={handleInputChange} disabled={!enableEditing}/>
                    </div>
                </div>
                <div className={styles.form_field_row}>
                    <div className={styles.form_field}>
                        <InputField type={'email'} label={FORM_LABELS.EMAIL} name={"email"} placeholder={PLACEHOLDERS.EMAIL} value={updatedDetails.email} onChange={handleInputChange} disabled={!enableEditing}/>
                    </div>
                    <div className={styles.form_field}>
                        <InputField type={'number'} label={FORM_LABELS.PHONE} name={"phone"} placeholder={PLACEHOLDERS.PHONE} value={updatedDetails.phone} onChange={handleInputChange} disabled={!enableEditing}/>
                    </div>
                </div>
                <div className={styles.form_field_row}>
                    <div className={styles.form_field}>
                        <Dropdown list={cities} label={FORM_LABELS.CITY} name={'city'} value={updatedDetails.city} onChange={handleInputChange} disabled={!enableEditing}/>        
                    </div>
                    <div className={styles.form_field}>
                        <Dropdown list={regions[updatedDetails.city]} label={FORM_LABELS.REGION} name={'region'} value={updatedDetails.region} onChange={handleInputChange} disabled={!enableEditing} />  
                    </div>   
                </div>
                <div className={styles.form_field_row}>
                    <MultiLineInputField label={FORM_LABELS.ADDRESS} name={"address"} placeholder={PLACEHOLDERS.ADDRESS} value={updatedDetails.address} onChange={handleInputChange} disabled={!enableEditing}/>
                </div>
                {
                    user==='seller' &&  <div className={styles.form_field_row}>
                        <div style={{width: '45%'}}>
                            <InputField type={'number'} label={"Enter Capacity"} name={"capacity"} placeholder={"Capacity....."} value={updatedDetails.capacity} onChange={handleInputChange} disabled={!enableEditing} />
                        </div>
                    </div>
                }
                <div className={styles.buttonsContainer}>
                    {
                        enableEditing ? (
                            <>
                                 <PrimaryButton title={"Save"} onClick={()=>{saveDetails(updatedDetails)}}/>  
                                 <OulinedButton title={"Cancel"} onClick={()=>{setEnableEditing(false)}} />
                            </>
                        ):(
                            <PrimaryButton title={"Edit"} onClick={()=>{setEnableEditing(true)}}/>
                        )
                    }
                </div>
          </div>
    </div>
  )
}

export default Profile
