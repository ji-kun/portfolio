import React from 'react';
import Image from 'next/image';

import styles from '@/styles/introduction.module.css'

const Introduction = () => {
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
    <>
      <div className={styles.intro_container}>
        <div className={styles.intro_texts}>
          <div className={styles.name}>
            ROHIT KUNJI
          </div>
          <div className={styles.title}>
            Hello!<br /> Find out about me.
          </div>
          <div className={styles.subtitle}>
            I am a Frontend Developer and UI UX Designer with an experience of 3+ years
          </div>
          <a style={{ textDecoration: 'none' }} href="/RohitKunji_Resume.pdf" download>
            <div className={styles.button}>
              Check me out!
            </div>
          </a>
        </div>
        <Image
          src="/images/intro_photo.png"
          alt="Hello all"
          className={styles.intro_photo}
          width={500}
          height={500}
          priority
        />
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
    </>
  )
}

export default Introduction;