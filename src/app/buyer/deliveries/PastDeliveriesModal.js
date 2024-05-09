import React, {useState, useEffect} from 'react'
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
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import closeIcon from '../../../assets/close-icon.svg'
import styles from './BuyerDeliveries.module.scss'
import { Grid } from '@mui/material';
import Image from 'next/image'

const PastDeliveriesModal = ({isVisible, handleDeliveryModalVisibility, deliveryId}) => {

    const data = {
        delivery_person_name : "Ravish Chaudhari",
        delivery_date : "22-09-2024",
        delivery_time : "10:00 AM",
        item_details : [
            {
                product_name : "Orange Juice",
                quantity : 5
            },
            {
                product_name : "Apple Juice",
                quantity : 2
            },
            {
                product_name : "Beet Juice",
                quantity : 1
            },
            {
                product_name : "Grape Juice",
                quantity : 2
            }
        ]
    }

    const [deliveryDetails, setDeliveryDetails] = useState({})

    const getDeliveryDetails = ()=>{
        setDeliveryDetails(data)
    }

    useEffect(()=>{
        getDeliveryDetails()
    },[])


    const calcSum = (key)=>{

        let sum = 0;

        deliveryDetails.item_details.forEach((item)=>{
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
                onClose={handleDeliveryModalVisibility}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{px: 3, py:0}}>
                    <div className={styles.modal_header}>
                        <p className={styles.modal_title}>Delivery Details</p>
                        <Image onClick={handleDeliveryModalVisibility} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <div className={styles.modal_body}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <p><span style={{fontWeight: 600}}>Delivery Person Name : </span><span>{deliveryDetails.delivery_person_name}</span></p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <p><span style={{fontWeight: 600}}>Delivery Date : </span><span>{deliveryDetails.delivery_date}</span></p>
                            </Grid>
                            <Grid item xs={5}>
                                <p><span style={{fontWeight: 600}}>Delivery Time: </span><span>{deliveryDetails.delivery_time}</span></p>
                            </Grid>
                        </Grid>
                        <div className={styles.item_details}>
                            <p style={{fontWeight: 600}}>Item Details :</p>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                            {
                                deliveryDetails.item_details ?(
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
                                                    deliveryDetails.item_details.map((item, index)=>(
                                                            <TableRow key={index}>
                                                                <TableCell>{item.product_name}</TableCell>
                                                                <TableCell>{item.quantity}</TableCell>
                                                            </TableRow>
                                                            )
                                                        )
                                                }
                                                <TableCell sx={{fontWeight: 600}}>Total</TableCell> 
                                                <TableCell sx={{fontWeight: 600}}>{calcSum('quantity')}</TableCell> 
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
                    <OulinedButton title={'Cancel'} onClick={handleDeliveryModalVisibility}/>
                </DialogActions>
            </Dialog>
    </>
  )
}

export default PastDeliveriesModal
