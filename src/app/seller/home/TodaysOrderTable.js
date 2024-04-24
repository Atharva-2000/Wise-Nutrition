import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TodaysOrderTable = () => {

    const today_order_data = [
        {
            product_name : "Orange Juice",
            quantity: {
              ordered: 80,
              delivered: 60,
              remaining: 20
            }
        },
        {
            product_name : "Apple Juice",
            quantity: {
              ordered: 70,
              delivered: 50,
              remaining: 20
            }
        },
        {
            product_name : "Grape Juice",
            quantity: {
              ordered: 60,
              delivered: 30,
              remaining: 30
            }
        },
        {
            product_name : "Prune Juice",
            quantity: {
              ordered: 50,
              delivered: 20,
              remaining: 30
            }
        },
        {
            product_name : "Pomegranate Juice",
            quantity: {
              ordered: 60,
              delivered: 55,
              remaining: 5
            }
        },
        {
            product_name : "Beet Juice",
            quantity: {
              ordered: 40,
              delivered: 15,
              remaining: 25
            }
        },
        {
            product_name : "Amla Juice",
            quantity: {
              ordered: 60,
              delivered: 10,
              remaining: 50
            }
        },
        {
            product_name : "Watermelon Juice",
            quantity: {
              ordered: 80,
              delivered: 60,
              remaining: 20
            }
        },
      ]

      const today_order_table_header = ["Product Name", "Ordered Quantity", "Delivered Quantity", "Remaining Quantity"]

  return (
     <>
        <TableContainer style={{width: '80%'}} component={Paper}>
                {
                    today_order_data.length>0 ?(
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {
                                        today_order_table_header.map((title)=>(
                                            <TableCell key={title} style={{backgroundColor: '#f1f1f1', fontWeight: 600}}>{title}</TableCell>
                                        ))
                                    }   
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    today_order_data.map((item, index)=>(
                                            <TableRow key={index}>
                                                    <TableCell>{item.product_name}</TableCell>
                                                    <TableCell>{item.quantity.ordered}</TableCell>
                                                    <TableCell>{item.quantity.delivered}</TableCell>
                                                    <TableCell>{item.quantity.remaining}</TableCell>
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
     </>
  )
}

export default TodaysOrderTable
