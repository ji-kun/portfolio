import React from 'react'
import styles from '@/styles/header.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Image
        src="/images/rohitkunji.png"
        alt="rohitkunji"
        className={styles.intro_photo}
        width={120}
        height={20}
        priority
      />
      <Image
        src="/images/rohitkunji.png"
        alt="rohitkunji"
        className={styles.intro_photo}
        width={120}
        height={20}
        priority
      />
      <Image
        src="/images/rohitkunji.png"
        alt="rohitkunji"
        className={styles.intro_photo}
        width={120}
        height={20}
        priority
      />
      <Image
        src="/images/rohitkunji.png"
        alt="rohitkunji"
        className={styles.intro_photo}
        width={120}
        height={20}
        priority
      />
    </div>
  )
}

export default Footer