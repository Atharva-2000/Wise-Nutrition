import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BuyerOrders.module.scss'
import rupeeIcon from '../../../assets/rupee-icon.svg'
import Image from 'next/image';
import CancelledOrdersModal from './CancelledOrdersModal';

const CancelledOrdersTable = () => {

  const data = [
      {
          order_id : 1001,
          ordered_quantity: 21,
          delivered_quantity: 0,
          amount_paid: 1000,
          refund_amount: 1000,
          refund_status: "Complete",
          order_date: '21-09-2024'
      },
      {
          order_id : 1002,
          ordered_quantity: 25,
          delivered_quantity: 6,
          amount_paid: 1100,
          refund_amount: 850,
          refund_status: "Incomplete",
          order_date: '21-09-2024'
      },
      {
          order_id : 1003,
          ordered_quantity: 14,
          delivered_quantity: 0,
          amount_paid: 1000,
          refund_amount: 1000,
          refund_status: "Complete",
          order_date: '21-09-2024'
      }
  ]

  const [cancelledOrderDetails, setCancelledOrderDetails] = useState([])

  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false)

  const [selectedID, setSelectedID] = useState(-1)

  const handleOrderModalVisibility = ()=>{
     setIsOrderModalVisible(!isOrderModalVisible)
  }

  const getOrderDetails = ()=>{
      setCancelledOrderDetails(data)
  }

  useEffect(()=>{
     getOrderDetails()
  },[])

  const table_header = ["Order ID", "Order Details", "Ordered Qty", "Delivered Qty", "Amount Paid", "Refund Amount", "Refund Status", "Order Date"]

  return (
    <>

          <TableContainer component={Paper}>
                {
                    cancelledOrderDetails.length>0 ?(
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        table_header.map((title)=>(
                                            <TableCell key={title} style={{backgroundColor: '#f1f1f1', fontWeight: 600}}>{title}</TableCell>
                                        ))
                                    }   
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cancelledOrderDetails.map((item, index)=>(
                                            <TableRow key={index}>
                                                <TableCell sx={{py:0}}><p className={styles.order_id}>{item.order_id}</p></TableCell>
                                                <TableCell sx={{py:0}}>
                                                    <p 
                                                        className={styles.view_details_link} 
                                                        onClick={()=>{
                                                            setSelectedID(item.order_id) 
                                                            handleOrderModalVisibility()
                                                         }
                                                        }
                                                    >
                                                        View Details
                                                    </p>
                                                </TableCell>
                                                <TableCell sx={{py:0}}>{item.ordered_quantity}</TableCell>
                                                <TableCell sx={{py:0}}>{item.delivered_quantity}</TableCell>
                                                <TableCell sx={{py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.amount_paid}</p></div></TableCell>
                                                <TableCell sx={{py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.refund_amount}</p></div></TableCell>
                                                <TableCell sx={{py:0}}>{item.refund_status}</TableCell>
                                                <TableCell sx={{py:0}}>{item.order_date}</TableCell>    
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
          <CancelledOrdersModal isVisible={isOrderModalVisible} handleOrderModalVisibility={handleOrderModalVisibility} orderId={selectedID}/>
    </>
  )
}

export default CancelledOrdersTable
