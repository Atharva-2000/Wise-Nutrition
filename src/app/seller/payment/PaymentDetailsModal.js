import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import closeIcon from '../../../assets/close-icon.svg';
import rupeeIcon from '../../../assets/rupee-icon.svg'
import Image from 'next/image'
import styles from './SellerPayment.module.scss'
import OulinedButton from '@/components/shared/Button/OutlinedButton/OutlinedButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PaymentDetailsModal = ({isVisible, handlePaymentModalVisiblity, paymentID}) => {

    const data = [
        {
            product_name: "Orange Juice",
            quantity: 600,
            amount: 21000
        },
        {
            product_name: "Apple Juice",
            quantity: 500,
            amount: 17500
        },
        {
            product_name: "Beet Juice",
            quantity: 300,
            amount: 10500
        },
        {
            product_name: "Grape Juice",
            quantity: 400,
            amount: 14000
        }
    ]

    const [paymentDetails, setPaymentDetails] = useState([])

    useEffect(()=>{
        setPaymentDetails(data)
    },[])

    const calcSum = (key)=>{

         let sum = 0;

         paymentDetails.forEach((item)=>{
            sum = sum + item[key]
         })

       return sum;
    }

    const table_headers = ["Product", "Quantity", "Amount"]

  return (
    <>
        <Dialog
            open={isVisible}
            aria-labelledby="customized-dialog-title"
            onClose={handlePaymentModalVisiblity}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle sx={{px: 3, py:0}}>
                <div className={styles.modal_header}>
                    <p className={styles.modal_title}>Item Details</p>
                    <Image onClick={handlePaymentModalVisiblity} src={closeIcon} style={{height: '30px', width: '30px', cursor: 'pointer'}}/>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <div className={styles.modal_body}>
                    <TableContainer style={{width: '100%'}} component={Paper}>
                    {
                        paymentDetails.length>0 ?(
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
                                            paymentDetails.map((item, index)=>(
                                                    <TableRow key={index}>
                                                        <TableCell sx={{py:0}}>{item.product_name}</TableCell>
                                                        <TableCell sx={{py:0}}>{item.quantity}</TableCell>
                                                        <TableCell sx={{py:0}}><div className={styles.amount_field}><Image src={rupeeIcon} height={14} width={14}/><p>{item.amount}</p></div></TableCell>
                                                    </TableRow>
                                                    )
                                                )
                                        }
                                        <TableCell style={{fontWeight: 600}} sx={{py:0}}>Total</TableCell> 
                                        <TableCell style={{fontWeight: 600}} sx={{py:0}}>{calcSum('quantity')}</TableCell> 
                                        <TableCell style={{fontWeight: 600}} sx={{py:0}}><div className={styles.amount_field}><Image src={rupeeIcon} height={14} width={14}/><p>{calcSum('amount')}</p></div></TableCell>        
                                    </TableBody>
                                </Table>
                            ):(
                                <p>Data not available</p>
                            )
                        }
                    </TableContainer>
                </div>
            </DialogContent>
            <DialogActions>
                <OulinedButton title={'Cancel'} onClick={handlePaymentModalVisiblity}/>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default PaymentDetailsModal
