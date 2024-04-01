import React from 'react'
import styles from './titleui.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const SectionTitle = ({ title, ViewALLBtn, className = null }) => { 
  return (
    <h2 className={`${styles.SectionTitle} ${ViewALLBtn ? styles.ViewALLBtnHeading : ''} ${className}`}>
      {title}
      {ViewALLBtn && <Link href={ViewALLBtn}>
        <a className={styles.ViewALLBtn}> View All
          <span><Image width="14" height="14" src={`/images/blog-arrow-right.png`} alt='arrow' /></span>
        </a>
      </Link>}
    </h2>
  )
}

export default SectionTitle