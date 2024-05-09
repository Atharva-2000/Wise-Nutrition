"use client"

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
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import closeIcon from '../../../assets/close-icon.svg'
import rupeeIcon from '../../../assets/rupee-icon.svg'
import styles from './BuyerOrders.module.scss'
import { Grid } from '@mui/material';
import Image from 'next/image'

const ActiveOrdersModal = ({isVisible, handleOrderModalVisibility, orderId}) => {

    const data = {
        order_placement_date : '21-09-2024',
        order_placement_time : '09:00 AM',
        delivery_commencement_date : '22-09-2024',
        delivery_completion_date : '22-10-2024',
        item_details : [
            {
                product_name : 'Orange Juice',
                subscription_type: 'Monthly',
                delivery_type : 'Daily',
                ordered_quantity : 30,
                delivered_quantity : 12,
                remaining_quantity : 18,
                amount : 1200 
            },
            {
                product_name : 'Apple Juice',
                subscription_type: 'Monthly',
                delivery_type : 'Alternate Days',
                ordered_quantity : 15,
                delivered_quantity : 7,
                remaining_quantity : 8,
                amount : 680 
            },
            {
                product_name : 'Beet Juice',
                subscription_type: 'Monthly',
                delivery_type : 'Custom - Tuesday',
                ordered_quantity : 4,
                delivered_quantity : 2,
                remaining_quantity : 2,
                amount : 200 
            },
            {
                product_name : 'Grape Juice',
                subscription_type: 'Weekly',
                delivery_type : 'Daily',
                ordered_quantity : 7,
                delivered_quantity : 6,
                remaining_quantity : 1,
                amount : 350 
            }
        ]
    }

    const [orderDetails, setOrderDetails] = useState({})

    const getOrderDetails = ()=>{
        setOrderDetails(data)
    }

    useEffect(()=>{
        getOrderDetails()
    },[])


    const calcSum = (key)=>{

        let sum = 0;

        orderDetails.item_details.forEach((item)=>{
           sum = sum + item[key]
        })

      return sum;
   }

   const table_headers = ["Product", "Subscription", "Category", "Ordered Oty", "Delivered Oty", "Remaining Oty", "Amount"]

  return (
    <>
            <Dialog
                open={isVisible}
                aria-labelledby="customized-dialog-title"
                onClose={handleOrderModalVisibility}
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle sx={{px: 3, py:0}}>
                    <div className={styles.modal_header}>
                        <p className={styles.modal_title}>Order Details</p>
                        <Image onClick={handleOrderModalVisibility} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <div className={styles.modal_body}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <p><span style={{fontWeight: 600}}>Order Placement Date : </span><span>{orderDetails.order_placement_date}</span></p>
                            </Grid>
                            <Grid item xs={6}>
                                <p><span style={{fontWeight: 600}}>Order Placement Time : </span><span>{orderDetails.order_placement_time}</span></p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <p><span style={{fontWeight: 600}}>Delivery Commencement Date : </span><span>{orderDetails.delivery_commencement_date}</span></p>
                            </Grid>
                            <Grid item xs={6}>
                                <p><span style={{fontWeight: 600}}>Delivery Completion Date (Expected) : </span><span>{orderDetails.delivery_completion_date}</span></p>
                            </Grid>
                        </Grid>
                        <div className={styles.item_details}>
                            <p style={{fontWeight: 600}}>Item Details :</p>
                            <TableContainer style={{width: '100%'}} component={Paper}>
                            {
                                orderDetails.item_details ?(
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
                                                    orderDetails.item_details.map((item, index)=>(
                                                            <TableRow key={index}>
                                                                <TableCell sx={{py:0}}>{item.product_name}</TableCell>
                                                                <TableCell sx={{py:0}}>{item.subscription_type}</TableCell>
                                                                <TableCell sx={{py:0}}>{item.delivery_type}</TableCell>
                                                                <TableCell sx={{py:0}}>{item.ordered_quantity}</TableCell>
                                                                <TableCell sx={{py:0}}>{item.delivered_quantity}</TableCell>
                                                                <TableCell sx={{py:0}}>{item.remaining_quantity}</TableCell>
                                                                <TableCell sx={{py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.amount}</p></div></TableCell>
                                                            </TableRow>
                                                            )
                                                        )
                                                }
                                                <TableCell sx={{fontWeight: 600, py:0}} colSpan={3}>Total</TableCell> 
                                                <TableCell sx={{fontWeight: 600, py:0}} >{calcSum('ordered_quantity')}</TableCell> 
                                                <TableCell sx={{fontWeight: 600, py:0}} >{calcSum('delivered_quantity')}</TableCell> 
                                                <TableCell sx={{fontWeight: 600, py:0}} >{calcSum('remaining_quantity')}</TableCell> 
                                                <TableCell sx={{fontWeight: 600, py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{calcSum('amount')}</p></div></TableCell>
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
                    <OulinedButton title={'Cancel'} onClick={handleOrderModalVisibility}/>
                </DialogActions>
            </Dialog>
    </>
  )
}

export default ActiveOrdersModal
