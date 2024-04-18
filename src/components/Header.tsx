import React from 'react'
import cn from 'classnames'

import styles from '@/styles/header.module.css'
import Image from 'next/image'

type HeaderProps = {
  selected: string,
  setSelected: Function,
}

const Header = ({ selected, setSelected }: HeaderProps) => {
  const headerMap = [
    {
      title: 'About',
    },
    {
      title: 'Skills',
    },
    {
      title: 'Experience',
    },
    {
      title: 'Contact',
    }
  ]

  return (
    <div className={styles.header_container}>
      <div className={styles.header_data}>
        <Image
          src="/images/rohitkunji.png"
          alt="rohitkunji"
          className={styles.intro_photo}
          width={120}
          height={20}
          priority
        />
        <div className={styles.items}>
          {headerMap.map((item: any) => {
            return (
              <div
                onClick={() => { setSelected(item.title) }}
                key={item.title} className={cn(styles.item, {
                  [styles.selected_item]: selected === item.title,
                })}>
                {item.title}
              </div>
            )
          })}
        </div>
        <a style={{ textDecoration: 'none' }} href="/RohitKunji_Resume.pdf" download>
          <div className={styles.button}>
            Download Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header