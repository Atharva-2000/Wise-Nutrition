import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './SellerPickups.module.scss'
import CustomButton from '@/components/shared/Button/CustomButton/CustomButton';
import PickupDetailsModal from './PickupDetailsModal';

const TodaysPickupsTable = () => {

    const data = [
      {
          pickup_id : "PC0001",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 50,
          status: "Pickup Complete",
          time : "09:00 AM"
      },
      {
          pickup_id : "PC0002",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 50,
          status: "Yet To Arrive",
          time : null
      },
      {
          pickup_id : "PC0003",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 60,
          status: "Arrived",
          time : null
      },
      {
          pickup_id : "PC0004",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 40,
          status: "Arrival Verified",
          time : null
      },
      {
          pickup_id : "PC0005",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 50,
          status: "Yet To Arrive",
          time : null
      },
      {
          pickup_id : "PC0006",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 60,
          status: "Pickup Complete",
          time : "09:00 AM"
      },
      {
          pickup_id : "PC0007",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 50,
          status: "Arrived",
          time : null
      },
      {
          pickup_id : "PC0008",
          delivery_person_name : "Delivery Person Name",
          total_quantity : 50,
          status: "Arrival Verified",
          time : null
      },
  ]


  const [todaysPickupsDetails, setTodaysPickupsDetails] = useState([])
   
  const [isPickupModalVisible, setIsPickupModalVisible] = useState(false)

  const [selectedID, setSelectedID] = useState(-1)

  const handlePickupModalVisibility = ()=>{
       setIsPickupModalVisible(!isPickupModalVisible)
  }

  const getPickupDetails = ()=>{
      setTodaysPickupsDetails(data)
  }

  useEffect(()=>{
      getPickupDetails()
  },[])

  const table_header = ["Pickup ID", "Pickup Details", "Delivery Person Name", "Total Quantity", "Pickup Time", "Status"]

  return (
    <>
          <TableContainer component={Paper}>
                {
                    todaysPickupsDetails.length>0 ?(
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
                                    todaysPickupsDetails.map((item, index)=>(
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
                                                <TableCell sx={{py:0}}>{item.time ? item.time : "- - -"}</TableCell>
                                                <TableCell sx={{py:0}}><div className={styles.status_field}><p>{item.status}</p>{item.status==='Arrived' ? <CustomButton title={'Verify'} styles={{backgroundColor: '#14B1C1', fontSize: '13px', fontWeight: 600, padding : '0.6rem 1.2rem', color: 'white'}}/> : null}</div></TableCell>
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

export default TodaysPickupsTable
