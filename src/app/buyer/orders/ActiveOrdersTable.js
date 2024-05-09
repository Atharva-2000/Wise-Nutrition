import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BuyerOrders.module.scss'
import CustomButton from '@/components/shared/Button/CustomButton/CustomButton';
import rupeeIcon from '../../../assets/rupee-icon.svg'
import Image from 'next/image';
import ActiveOrdersModal from './ActiveOrdersModal';


const ActiveOrdersTable = () => {

  const data = [
      {
          order_id : 1001,
          ordered_quantity: 21,
          delivered_quantity: 14,
          remaining_quantity: 7,
          amount: 1000,
          order_date : '21-10-2024'
      },
      {
          order_id : 1002,
          ordered_quantity: 25,
          delivered_quantity: 15,
          remaining_quantity: 10,
          amount: 1100,
          order_date : '28-09-2024'
      },
      {
          order_id : 1003,
          ordered_quantity: 14,
          delivered_quantity: 10,
          remaining_quantity: 4,
          amount: 1000,
          order_date : '21-09-2024'
      }
  ]

   
  const [activeOrderDetails, setActiveOrderDetails] = useState([])

  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false)

  const [selectedID, setSelectedID] = useState(-1)

  const handleOrderModalVisibility = ()=>{
     setIsOrderModalVisible(!isOrderModalVisible)
  }

  const getOrderDetails = ()=>{
      setActiveOrderDetails(data)
  }

  useEffect(()=>{
     getOrderDetails()
  },[])

  const table_header = ["Order ID", "Order Details", "Ordered Qty", "Delivered Qty", "Remaining Qty", "Amount Paid", "Order Date", "Action"]

  return (
    <>
            <TableContainer component={Paper}>
                {
                    activeOrderDetails.length>0 ?(
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
                                    activeOrderDetails.map((item, index)=>(
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
                                                <TableCell sx={{py:0}}>{item.remaining_quantity}</TableCell>
                                                <TableCell sx={{py:0}}><div className={styles.price_field}><Image src={rupeeIcon} height={15} width={15}/><p>{item.amount}</p></div></TableCell>
                                                <TableCell sx={{py:0}}>{item.order_date}</TableCell>
                                                <TableCell sx={{py:0}}><CustomButton title={'Cancel Order'} styles={{backgroundColor: '#FF2323', fontSize: '13px', fontWeight: 600, padding : '0.6rem 1.2rem', color: 'white'}}/></TableCell>
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

          <ActiveOrdersModal isVisible={isOrderModalVisible} handleOrderModalVisibility={handleOrderModalVisibility} orderId={selectedID}/>
    </>
  )
}

export default ActiveOrdersTable
