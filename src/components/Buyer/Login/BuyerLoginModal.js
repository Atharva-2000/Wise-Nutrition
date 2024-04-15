"use client"

import React, {useState} from 'react'
import styles from './BuyerLoginModal.module.scss'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { labels } from '@/utils/constants';
import closeIcon from '../../../assets/close-icon.svg'
import InputField from '@/components/shared/InputField/InputField';
import Image from 'next/image'
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import PrimaryButton from '@/components/shared/Button/PrimaryButton/PrimaryButton';

const BuyerLoginModal = ({isVisible, handleLoginModalVisiblity}) => {

    const {LOG_IN, SIGN_UP, FORGOT_PASSWORD, FORM_LABELS, PLACEHOLDERS} = labels

    const empty_user_details_obj = {username: '', password: ''}

    const [userDetails , setUserDetails] = useState(empty_user_details_obj)

    const handleInputChange = (name, value)=>{
        setUserDetails({...userDetails, [name]: value})
    }

    const sumbmitdata = ()=>{
        console.log(userDetails);
        setUserDetails(empty_user_details_obj)
        handleLoginModalVisiblity()
    }

  return (
        <>
             <Dialog
               open={isVisible}
               aria-labelledby="customized-dialog-title"
               onClose={handleLoginModalVisiblity}
               maxWidth="sm"
               fullWidth
             >
                <DialogTitle sx={{paddingLeft: 3, paddingRight: 3, paddingTop: 0, paddingBottom:0}}>
                   <div className={styles.modal_header}>
                        <p className={styles.title}>{LOG_IN}</p>
                        <Image onClick={handleLoginModalVisiblity} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                   </div>
                </DialogTitle>
                <DialogContent dividers>
                  <div className={styles.modal_body}>
                    <InputField type={'text'} label={FORM_LABELS.USERNAME} name={"username"} placeholder={PLACEHOLDERS.USERNAME} value={userDetails.username} onChange={handleInputChange}/>
                    <InputField type={'password'} label={FORM_LABELS.PASSWORD} name={"password"} placeholder={PLACEHOLDERS.PASSWORD} value={userDetails.password} onChange={handleInputChange}/>
                    <div style={{display: 'flex', justifyContent:'flex-end'}}> 
                        <p className={styles.forgot_password_link}>{FORGOT_PASSWORD}</p>
                    </div>
                    <div style={{marginTop: '1.5rem'}}>
                      <center>
                        <PrimaryButton title={LOG_IN} onClick={()=>{sumbmitdata()}}/>
                      </center>
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                     <OulinedButton title={'Cancel'} onClick={handleLoginModalVisiblity}/>
                </DialogActions>
             </Dialog>
        </>
  )
}

export default BuyerLoginModal
