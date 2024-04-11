"use client"

import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({list, name, value, label, onChange}) => {
  return (
    <div className={`${styles.dropdown}`}>
           <label>{label}</label>
           <select name={name} value={value} onChange={(e)=>{onChange(name, e.target.value )}}>
               {
                  list ? ( list.map((item, index)=>{
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                   })):(
                          <option>No results</option>
                   )
               }
           </select>
    </div>
  )
}

export default Dropdown
