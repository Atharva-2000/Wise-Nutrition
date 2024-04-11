"use client"

import React, { useState } from 'react'
import styles from './InpuField.module.scss'

const InputField = ({type, name, value, placeholder, label, onChange, inputProps}) => {

  return (
     <>
        <div className={`${styles.inputfield}`}>
            <label>{label}</label>
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={(e)=>{onChange(name, e.target.value )}} {...inputProps} />
        </div>
     </>
  )
}

export default InputField
