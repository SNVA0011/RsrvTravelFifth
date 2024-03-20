import React from 'react'
import styles from './buttonui.module.scss'
import { Button } from 'react-bootstrap'


const ButtonStyle = ({ content, outline, fullwidth, onClick, className = null, SubsCrbBtn }) => {
    return (
        <Button   
            variant={`${outline ? 'outline-' : ''}danger`} onClick={onClick}
            className={`bt ${outline ? styles.OutlineClr : styles.FillClr} ${fullwidth ? 'w-100' : ''} ${styles.FlightOfdealBtn} ${className} ${SubsCrbBtn && styles.SubsCrbBtn}`}> 
            {content} 
        </Button>
    )
}

export default ButtonStyle