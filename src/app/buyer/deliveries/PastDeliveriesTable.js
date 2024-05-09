import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BuyerDeliveries.module.scss'
import PastDeliveriesModal from './PastDeliveriesModal';

const PastDeliveriesTable = () => {

    const data = [
        {
            delivery_id : 'D001',
            quantity : 20,
            completion_date : '21-09-2024',
            completion_time : '09:00 AM'
        },
        {
            delivery_id : 'D002',
            quantity : 30,
            completion_date : '21-09-2024',
            completion_time : '10:00 AM'
        },
        {
            delivery_id : 'D003',
            quantity : 10,
            completion_date : '21-08-2024',
            completion_time : '09:00 AM'
        },
        {
            delivery_id : 'D004',
            quantity : 10,
            completion_date : '21-08-2024',
            completion_time : '11:00 AM'
        },
        {
            delivery_id : 'D005',
            quantity : 20,
            completion_date : '21-08-2024',
            completion_time : '12:00 AM'
        },
        {
            delivery_id : 'D006',
            quantity : 20,
            completion_date : '21-07-2024',
            completion_time : '09:00 AM'
        },
        {
            delivery_id : 'D007',
            quantity : 20,
            completion_date : '21-06-2024',
            completion_time : '09:00 AM'
        },
        {
            delivery_id : 'D008',
            quantity : 20,
            completion_date : '21-05-2024',
            completion_time : '09:00 AM'
        }


    ]

    const [deliveryDetails, setDeliveryDetails] = useState([])

    const [isDeliveryModalVisible, setIsDeliveryModalVisible] = useState(false)
  
    const [selectedID, setSelectedID] = useState(-1)
  
    const handleDeliveryModalVisibility = ()=>{
       setIsDeliveryModalVisible(!isDeliveryModalVisible)
    }
  
    const getDeliveryDetails = ()=>{
        setDeliveryDetails(data)
    }
  
    useEffect(()=>{
       getDeliveryDetails()
    },[])
  
    const table_header = ["Delivery ID", "Delivery  Details", "Total Quantity", "Completion Date", "Completion Time"]

  return (
    <>
            <TableContainer component={Paper}>
                {
                    deliveryDetails.length>0 ?(
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
                                    deliveryDetails.map((item, index)=>(
                                            <TableRow key={index}>
                                                <TableCell sx={{py:0}}><p className={styles.delivery_id}>{item.delivery_id}</p></TableCell>
                                                <TableCell sx={{py:0}}>
                                                    <p 
                                                        className={styles.view_details_link} 
                                                        onClick={()=>{
                                                            setSelectedID(item.delivery_id) 
                                                            handleDeliveryModalVisibility()
                                                         }
                                                        }
                                                    >
                                                        View Details
                                                    </p>
                                                </TableCell>
                                                <TableCell sx={{py:0}}>{item.quantity}</TableCell>
                                                <TableCell sx={{py:0}}>{item.completion_date}</TableCell>
                                                <TableCell sx={{py:0}}>{item.completion_time}</TableCell>     
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
          
          <PastDeliveriesModal isVisible={isDeliveryModalVisible} handleDeliveryModalVisibility={handleDeliveryModalVisibility} deliveryId={selectedID}/>
    </>
  )
}

export default PastDeliveriesTable
