import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TommorowOrderTable = () => {

    const tommorow_order_data = [
        {
           product_name : "Orange Juice",
           quantity: 80
        },
        {
           product_name : "Apple Juice",
           quantity: 70
        },
        {
           product_name : "Grape Juice",
           quantity: 50
        },
        {
           product_name : "Prune Juice",
           quantity: 50
        },
        {
           product_name : "Pomegranate Juice",
           quantity: 60
        },
        {
           product_name : "Beet Juice",
           quantity: 40
        },
        {
           product_name : "Amla Juice",
           quantity: 60
        },
        {
           product_name : "Watermelon Juice",
           quantity: 80
        }
     ]


     const tommorow_order_table_header = ["Product Name", "Quantity"]

  return (
     <>
        <TableContainer style={{width: '50%'}} component={Paper}>
                {
                    tommorow_order_data.length>0 ?(
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {
                                        tommorow_order_table_header.map((title)=>(
                                            <TableCell key={title} style={{backgroundColor: '#f1f1f1', fontWeight: 600}}>{title}</TableCell>
                                        ))
                                    }   
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    tommorow_order_data.map((item, index)=>(
                                            <TableRow key={index}>
                                                    <TableCell>{item.product_name}</TableCell>
                                                    <TableCell>{item.quantity}</TableCell>
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

export default TommorowOrderTable
