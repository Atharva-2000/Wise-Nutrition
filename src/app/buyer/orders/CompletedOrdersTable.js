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
import CompletedOrdersModal from './CompletedOrdersModal';

const CompletedOrdersTable = () => {

  const data = [
      {
          order_id : 1001,
          ordered_quantity: 21,
          amount: 1000,
          order_date : '21-09-2024',
          completion_date: '21-10-2024'
      },
      {
          order_id : 1002,
          ordered_quantity: 25,
          amount: 1100,
          order_date : '21-09-2024',
          completion_date: '21-10-2024'
      },
      {
          order_id : 1003,
          ordered_quantity: 14,
          amount: 1000,
          order_date : '21-09-2024',
          completion_date: '28-09-2024'
      },
      {
          order_id : 1004,
          ordered_quantity: 35,
          amount: 1250,
          order_date : '21-06-2024',
          completion_date: '21-07-2024'
      },
  ]

  const [completedOrderDetails, setCompletedOrderDetails] = useState([])

  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false)

  const [selectedID, setSelectedID] = useState(-1)

  const handleOrderModalVisibility = ()=>{
     setIsOrderModalVisible(!isOrderModalVisible)
  }

  const getOrderDetails = ()=>{
      setCompletedOrderDetails(data)
  }

  useEffect(()=>{
     getOrderDetails()
  },[])

  const table_header = ["Order ID", "Order Details", "Ordered Qty", "Amount Paid", "Order Date", "Completion Date"]

  return (
    <>
            <TableContainer component={Paper}>
                {
                    completedOrderDetails.length>0 ?(
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
                                    completedOrderDetails.map((item, index)=>(
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
                                                <TableCell sx={{py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.amount}</p></div></TableCell>
                                                <TableCell sx={{py:0}}>{item.order_date}</TableCell>
                                                <TableCell sx={{py:0}}>{item.completion_date}</TableCell>     
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
          <CompletedOrdersModal isVisible={isOrderModalVisible} handleOrderModalVisibility={handleOrderModalVisibility} orderId={selectedID}/>
    </>
  )
}

export default CompletedOrdersTable
