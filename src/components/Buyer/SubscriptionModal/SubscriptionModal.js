import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import styles from './SubscriptionModal.module.scss'
import PrimaryButton from '@/components/shared/Button/PrimaryButton/PrimaryButton';
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import closeIcon from '../../../assets/close-icon.svg'
import Image from 'next/image';

const SubscriptionModal = ({isVisible, handleSubscriptionModalVisibility}) => {

    const subscription_types = ["Weekly", "Monthly", "Quarterly"]

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const delivery_types = {
        "Weekly" : ["Daily", "Alternate Days"],
        "Monthly" : ["Daily", "Alternate Days", "Custom Day"],
        "Quarterly" : ["Daily", "Alternate Days", "Custom Day"]
    }

    const empty_subscription_details_obj = {subscription_type: subscription_types[0], delivery_type: "Daily", custom_day: '' }

    const [subscriptionDetails, setSubcriptionDetails] = useState(empty_subscription_details_obj)

    const handleInputChange = (name,value)=>{
        setSubcriptionDetails({...subscriptionDetails, [name] : value})
    }

  return (
    <>
         <Dialog
            open={isVisible}
            aria-labelledby="customized-dialog-title"
            onClose={handleSubscriptionModalVisibility}
            maxWidth="xs"
            fullWidth
         >
             <DialogTitle sx={{paddingLeft: 3, paddingRight: 3, paddingTop: 0, paddingBottom:0}}>
                <div className={styles.modal_header}>
                    <p className={styles.title}>Choose Subscription</p>
                    <Image onClick={handleSubscriptionModalVisibility} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                </div>
             </DialogTitle>
             <DialogContent dividers>
                <div className={styles.modal_body}>
                    <Dropdown list={subscription_types} label={"Subscription Type"} name={'subscription_type'} value={subscriptionDetails.subscription_type} onChange={handleInputChange} />
                    <Dropdown list={delivery_types[subscriptionDetails.subscription_type]} label={"Delivery Type"} name={'delivery_type'} value={subscriptionDetails.delivery_type} onChange={handleInputChange} />
                    {
                        subscriptionDetails.delivery_type==="Custom Day" && <Dropdown list={weekdays} name={'custom_day'} label={'Day (for each week in the month)'} value={subscriptionDetails.custom_day} onChange={handleInputChange} />
                    }
                </div>
             </DialogContent>
             <DialogActions>
                <PrimaryButton title={'Apply'}/>
                <OulinedButton title={'Cancel'} onClick={handleSubscriptionModalVisibility}/>
             </DialogActions>
         </Dialog>
    </>
  )
}

export default SubscriptionModal
