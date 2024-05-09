import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import closeIcon from '../../../assets/close-icon.svg';
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import styles from './SellerPickups.module.scss'
import { Grid } from '@mui/material';
import Image from 'next/image'

const PickupDetailsModal = ({isVisible, handlePickupModalVisibility, pickupID}) => {

    const data = {
        delivery_person_name : "Ravish Chaudhari",
        contact_no : "5483231641",
        pickup_date : "22-09-2024",
        status: "Complete",
        pickup_time: "08:00 AM",
        item_details : [
            {
                product_name: "Orange Juice",
                quantity: 10
            },
            {
                product_name: "Apple Juice",
                quantity: 8
            },
            {
                product_name: "Beet Juice",
                quantity: 3
            },
            {
                product_name: "Grape Juice",
                quantity: 5
            }
        ]
        
    }

    const [pickupDetails, setPickupDetails] = useState({})

    useEffect(()=>{
        setPickupDetails(data)
    },[])

    const calcSum = (key)=>{

        let sum = 0;

        pickupDetails.item_details.forEach((item)=>{
           sum = sum + item[key]
        })

      return sum;
   }

   const table_headers = ["Product", "Quantity"]

  return (
    <>
            <Dialog
                open={isVisible}
                aria-labelledby="customized-dialog-title"
                onClose={handlePickupModalVisibility}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle sx={{px: 3, py:0}}>
                    <div className={styles.modal_header}>
                        <p className={styles.modal_title}>Item Details</p>
                        <Image onClick={handlePickupModalVisibility} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <div className={styles.modal_body}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <p><span style={{fontWeight: 600}}>Delivery Person Name : </span><span>{pickupDetails.delivery_person_name}</span></p>
                            </Grid>
                            <Grid item xs={5}>
                                <p><span style={{fontWeight: 600}}>Contact No. : </span><span>{pickupDetails.contact_no}</span></p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <p><span style={{fontWeight: 600}}>Pickup Date : </span><span>{pickupDetails.pickup_date}</span></p>
                            </Grid>
                            <Grid item xs={5}>
                                <p><span style={{fontWeight: 600}}>Pickup Time : </span><span>{pickupDetails.pickup_time}</span></p>
                            </Grid>
                        </Grid>
                        <div className={styles.item_details}>
                            <p style={{fontWeight: 600}}>Item Details</p>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                            {
                                pickupDetails.item_details ?(
                                    <Table>
                                            <TableHead>
                                                <TableRow>
                                                    {
                                                        table_headers.map((title)=>(
                                                            <TableCell  key={title} style={{backgroundColor: '#f2f2f2', fontWeight: 600}}>{title}</TableCell>
                                                        ))
                                                    }   
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    pickupDetails.item_details.map((item, index)=>(
                                                            <TableRow key={index}>
                                                                <TableCell>{item.product_name}</TableCell>
                                                                <TableCell>{item.quantity}</TableCell>
                                                            </TableRow>
                                                            )
                                                        )
                                                }
                                                <TableCell style={{fontWeight: 600}}>Total</TableCell> 
                                                <TableCell style={{fontWeight: 600}}>{calcSum('quantity')}</TableCell> 
                                            </TableBody>
                                        </Table>
                                    ):(
                                        <p>Data not available</p>
                                    )
                                }
                            </TableContainer>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <OulinedButton title={'Cancel'} onClick={handlePickupModalVisibility}/>
                </DialogActions>
            </Dialog>
    </>
  )
}

export default PickupDetailsModal
