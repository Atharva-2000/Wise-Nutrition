"use client"

import React, {useState} from 'react'
import styles from './BuyerSignUpModal.module.scss'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import closeIcon from '../../../assets/close-icon.svg';
import Image from 'next/image'
import InputField from '@/components/shared/InputField/InputField';
import PrimaryButton from '@/components/shared/Button/PrimaryButton/PrimaryButton';
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import { labels, cities, regions } from '@/utils/constants';
import Grid from '@mui/material/Grid';
import MultiLineInputField from '@/components/shared/MultilineInputField/MultiLineInputField';
import Dropdown from '@/components/shared/Dropdown/Dropdown';

const BuyerSignUpModal = ({isVisible, handleSignUpModalVisiblity}) => {

    const {LOG_IN, SIGN_UP, FORM_LABELS, PLACEHOLDERS} = labels

    const empty_user_details_obj = {firstname: '', lastname: '', email: '', phone: '', city: cities[0], region: regions['Pune'][0], address: '', capacity: '', password: '', confirm_password: ''}

    const [userDetails , setUserDetails] = useState(empty_user_details_obj)

    const handleInputChange = (name, value)=>{
        setUserDetails({...userDetails, [name]: value})
    }

    const sumbmitdata = ()=>{
        console.log(userDetails);
        setUserDetails(empty_user_details_obj)
        handleSignUpModalVisiblity()
    }

  return (
        <>
                <Dialog
                  open={isVisible}
                  aria-labelledby="customized-dialog-title"
                  onClose={handleSignUpModalVisiblity}
                  maxWidth="md"
                  fullWidth
                >
                    <DialogTitle sx={{paddingLeft: 3, paddingRight: 3, paddingTop: 0, paddingBottom:0}}>
                        <div className={styles.modal_header}>
                            <p className={styles.title}>{SIGN_UP}</p>
                            <Image onClick={handleSignUpModalVisiblity} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <div className={styles.modal_body}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'text'} label={FORM_LABELS.FIRST_NAME} name={"firstname"} placeholder={PLACEHOLDERS.FIRST_NAME} value={userDetails.firstname} onChange={handleInputChange}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'text'} label={FORM_LABELS.LAST_NAME} name={"lastname"} placeholder={PLACEHOLDERS.LAST_NAME} value={userDetails.lastname} onChange={handleInputChange}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'email'} label={FORM_LABELS.EMAIL} name={"email"} placeholder={PLACEHOLDERS.EMAIL} value={userDetails.email} onChange={handleInputChange}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'number'} label={FORM_LABELS.PHONE} name={"phone"} placeholder={PLACEHOLDERS.PHONE} value={userDetails.phone} onChange={handleInputChange}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={6}>
                                    <Dropdown list={cities} label={FORM_LABELS.CITY} name={'city'} value={userDetails.city} onChange={handleInputChange} />  
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Dropdown list={regions[userDetails.city]} label={FORM_LABELS.REGION} name={'region'} value={userDetails.region} onChange={handleInputChange} />  
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <MultiLineInputField label={FORM_LABELS.ADDRESS} name={"address"} placeholder={PLACEHOLDERS.ADDRESS} value={userDetails.address} onChange={handleInputChange}/>
                            </Grid>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'password'} label={FORM_LABELS.PASSWORD} name={"password"} placeholder={PLACEHOLDERS.PASSWORD} value={userDetails.password} onChange={handleInputChange}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputField type={'password'} label={FORM_LABELS.CONFIRM_PASSWORD} name={"confirm_password"} placeholder={PLACEHOLDERS.CONFIRM_PASSWORD} value={userDetails.confirm_password} onChange={handleInputChange}/>
                                </Grid>
                            </Grid>
                            <div style={{marginTop: '1.5rem'}}>
                               <center>
                                  <PrimaryButton title={SIGN_UP} onClick={()=>{sumbmitdata()}}/>
                               </center>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <OulinedButton title={'Cancel'} onClick={handleSignUpModalVisiblity}/>
                    </DialogActions>
                </Dialog>
        </>
  )
}

export default BuyerSignUpModal
