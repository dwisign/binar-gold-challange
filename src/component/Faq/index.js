import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import './faq.scss'

const Faq = ({faqData}) => {
    const [open, setOpen] = useState('1')
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id)
    }
    //const id = id + 1
    return(
        <div className='faq'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h5>Frequently Asked Question</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='col-md-7'>
                    <Accordion open={open} toggle={toggle}>
                        {
                            faqData.map((item) => {
                                return(
                                    <AccordionItem>
                                        <AccordionHeader targetId={'1'}>
                                            {item.question}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={'1'}>
                                            <p>{item.answer}</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq