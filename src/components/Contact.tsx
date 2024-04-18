import React from 'react'

import styles from '@/styles/contact.module.css'
import Image from 'next/image'

const Contact = () => {
  const socials = [
    {
      name: 'linkedin',
      imageUrl: '/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/rohitkunji/',
    },
    {
      name: 'instagram',
      imageUrl: '/images/instagram.svg',
      link: 'https://www.instagram.com/rohitkunji/',
    },
    {
      name: 'dribbble',
      imageUrl: '/images/dribbble.svg',
      link: 'https://dribbble.com/RohitKunji',
    },
    {
      name: 'whatsapp',
      imageUrl: '/images/whatsapp.svg',
      link: 'https://wa.me/917900194170',
    },
    {
      name: 'steam',
      imageUrl: '/images/steam.svg',
      link: 'https://steamcommunity.com/profiles/76561198352900471/',
    }
  ]

  return (
    <div className={styles.contact_container}>
      <Image
        src="/images/contact.png"
        alt="Hello all"
        className={styles.contact_photo}
        width={300}
        height={300}
        priority
      />
      <div className={styles.contact_texts}>
        <div className={styles.name}>
          Get In touch
        </div>
        <div className={styles.title}>
          It need not be just for work! :)
        </div>
        <div className={styles.subtitle}>
          Find me on my socials
        </div>
        <div className={styles.social_container}>
          {
            socials.map((item: any) => {
              return (
                <a href={item.link} target='_blank' key={item.name}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    className={styles.social_icon}
                    width={24}
                    height={24}
                    priority
                  />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Contact