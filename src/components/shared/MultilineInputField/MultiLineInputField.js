import React from 'react'
import styles from './MultiLineInput.module.scss'

const MultiLineInputField = ({name, value, placeholder, label, onChange, inputProps}) => {
  return (
     <>
        <div className={`${styles.multlineinput}`}>
            <label>{label}</label>
            <textarea  name={name} value={value} placeholder={placeholder} onChange={(e)=>{onChange(name, e.target.value )}} {...inputProps} ></textarea>
        </div>
     </>
  )
}

export default MultiLineInputField
