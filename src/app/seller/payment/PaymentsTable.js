"use client"

import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './SellerPayment.module.scss'
import Image from 'next/image'
import rupeeIcon from '../../../assets/rupee-icon.svg'
import PaymentDetailsModal from './PaymentDetailsModal';

const PaymentsTable = () => {

    const payments_table_data = [
        {
            payment_id : "PY001",
            total_quantity: 1650,
            total_amount: 50000,
            month: "August",
            year: 2024,
            status: "Not Paid"
        },
        {
            payment_id : "PY002",
            total_quantity: 2000,
            total_amount: 65000,
            month: "August",
            year: 2024,
            status: "Paid"
        },
        {
            payment_id : "PY003",
            total_quantity: 1900,
            total_amount: 65000,
            month: "August",
            year: 2024,
            status: "Not Paid"
        },
        {
            payment_id : "PY004",
            total_quantity: 2800,
            total_amount: 90000,
            month: "August",
            year: 2024,
            status: "Paid"
        },
        {
            payment_id : "PY005",
            total_quantity: 1650,
            total_amount: 50000,
            month: "August",
            year: 2024,
            status: "Paid"
        },
        {
            payment_id : "PY006",
            total_quantity: 2200,
            total_amount: 65000,
            month: "July",
            year: 2024,
            status: "Paid"
        },
        {
            payment_id : "PY007",
            total_quantity: 3100,
            total_amount: 90000,
            month: "July",
            year: 2024,
            status: "Paid"
        },
        {
            payment_id : "PY008",
            total_quantity: 1650,
            total_amount: 50000,
            month: "June",
            year: 2024,
            status: "Paid"
        }
    ]

    const payments_table_header = ["Payment ID", "Details", "Total Quantity", "Total Amount", "For Month", "Status"]

    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false)

    const [selectedID, setSelectedID] = useState(-1)

    const handlePaymentModalVisiblity = ()=>{
        setIsPaymentModalVisible(!isPaymentModalVisible)
    }

  return (
     <>
            <TableContainer style={{width: '80%'}} component={Paper}>
                {
                    payments_table_data.length>0 ?(
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        payments_table_header.map((title)=>(
                                            <TableCell key={title} style={{backgroundColor: '#f1f1f1', fontWeight: 600}}>{title}</TableCell>
                                        ))
                                    }   
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    payments_table_data.map((item, index)=>(
                                            <TableRow key={index}>
                                                    <TableCell sx={{py:0}}><p className={styles.payment_id}>{item.payment_id}</p></TableCell>
                                                    <TableCell sx={{py:0}}>
                                                        <p 
                                                          className={styles.view_details_link} 
                                                          onClick={()=>{
                                                                setSelectedID(item.payment_id) 
                                                                handlePaymentModalVisiblity()
                                                            }
                                                          }
                                                        >
                                                         View Details
                                                        </p>
                                                    </TableCell>
                                                    <TableCell sx={{py:0}}>{item.total_quantity}</TableCell>
                                                    <TableCell sx={{py:0}}><div className={styles.amount_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.total_amount}</p></div></TableCell>
                                                    <TableCell sx={{py:0}}>{`${item.month} ${item.year}`}</TableCell>
                                                    <TableCell sx={{py:0}}><p className={item.status==='Paid' ? styles.paid : styles.not_paid}>{item.status}</p></TableCell>
                                            </TableRow>
                                        )
                                    )
                                }         
                            </TableBody>
                        </Table>
                    ):(
                        <p>Data not available</p>
                    )
                }
          </TableContainer>
          <PaymentDetailsModal isVisible={isPaymentModalVisible} handlePaymentModalVisiblity={handlePaymentModalVisiblity} paymentID={selectedID}/>
     </>
  )
}

export default PaymentsTable
