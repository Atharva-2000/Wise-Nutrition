import React from 'react'
import styles from './Faq.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import caretDownIcon from '../../../assets/carret-down-icon.svg'

const page = () => {

  let faq_data = []

  const sample_faq = {
      question : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

  for(let i=0;i<8;i++)
    {
        faq_data.push(sample_faq)
    }

  return (
    <div className={styles.faq_page}>
        <p className={styles.title}>Frequently Asked Questions</p>
        <div>
            {
                faq_data.map((item, index)=>{
                    return(
                        <Accordion key={index}>
                          <AccordionSummary>
                             {item.question}
                          </AccordionSummary>
                          <AccordionDetails>
                             {item.answer}
                          </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    </div>
  )
}

export default page
