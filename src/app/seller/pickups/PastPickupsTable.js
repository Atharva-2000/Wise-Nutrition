import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './SellerPickups.module.scss'
import PickupDetailsModal from './PickupDetailsModal';

const PastPickupsTable = () => {

    const data = [
        {
            pickup_id : "PC0001",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 50,
            date : "21-09-2024",
            time : "09:00 AM"
        },
        {
            pickup_id : "PC0002",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 50,
            date : "21-09-2024",
            time : "10:00 AM"
        },
        {
            pickup_id : "PC0003",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 60,
            date : "21-09-2024",
            time : "09:00 AM"
        },
        {
            pickup_id : "PC0004",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 40,
            date : "21-09-2024",
            time : "11:00 AM"
        },
        {
            pickup_id : "PC0005",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 50,
            date : "21-09-2024",
            time : "12:00 AM"
        },
        {
            pickup_id : "PC0006",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 60,
            date : "21-09-2024",
            time : "09:00 AM"
        },
        {
            pickup_id : "PC0007",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 50,
            date : "21-09-2024",
            time : "09:00 AM"
        },
        {
            pickup_id : "PC0008",
            delivery_person_name : "Delivery Person Name",
            total_quantity : 50,
            date : "21-09-2024",
            time : "09:00 AM"
        },
    ]

    const [pastPickupsDetails, setPastPickupsDetails] = useState([])
   
    const [isPickupModalVisible, setIsPickupModalVisible] = useState(false)

    const [selectedID, setSelectedID] = useState(-1)

    const handlePickupModalVisibility = ()=>{
         setIsPickupModalVisible(!isPickupModalVisible)
    }

    const getPickupDetails = ()=>{
         setPastPickupsDetails(data)
    }

    useEffect(()=>{
        getPickupDetails()
    },[])

    const table_header = ["Pickup ID", "Pickup Details", "Delivery Person Name", "Total Quantity", "Date", "Pickup Time"]

  return (
    <>
            <TableContainer component={Paper}>
                {
                    pastPickupsDetails.length>0 ?(
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
                                    pastPickupsDetails.map((item, index)=>(
                                            <TableRow key={index}>
                                                <TableCell sx={{py:0}}><p className={styles.pickup_id}>{item.pickup_id}</p></TableCell>
                                                <TableCell sx={{py:0}}>
                                                    <p 
                                                        className={styles.view_details_link} 
                                                        onClick={()=>{
                                                            setSelectedID(item.pickup_id) 
                                                            handlePickupModalVisibility()
                                                        }
                                                        }
                                                    >
                                                        View Details
                                                    </p>
                                                </TableCell>
                                                <TableCell sx={{py:0}}>{item.delivery_person_name}</TableCell>
                                                <TableCell sx={{py:0}}>{item.total_quantity}</TableCell>
                                                <TableCell sx={{py:0}}>{item.date}</TableCell>
                                                <TableCell sx={{py:0}}>{item.time}</TableCell>
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
          <PickupDetailsModal isVisible={isPickupModalVisible} handlePickupModalVisibility={handlePickupModalVisibility} pickupID={selectedID}/>
    </>
  )
}

export default PastPickupsTable

