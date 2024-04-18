import React from 'react'

import styles from '@/styles/experience.module.css'
import Image from 'next/image'

const Experience = () => {
  const experienceCards = [
    {
      title: 'Software Developer',
      company: 'Scaler',
      imageUrl: '/images/scaler.png',
      description: 'Worked on multiple projects under the Scaler Topics Umbrella.',
      siteUrl: 'https://www.scaler.com/topics/',
    },
    {
      title: 'Technical Intern',
      company: 'Rakuten India',
      imageUrl: '/images/rakuten.png',
      description: 'Worked on multiple projects under the Scaler Topics Umbrella.',
      siteUrl: 'https://corp.rakuten.co.in/',
    },
    {
      title: 'Co-Founder',
      company: 'Lostfoil',
      imageUrl: '/images/lostfoil.png',
      description: 'Worked on multiple projects under the Scaler Topics Umbrella.',
      siteUrl: 'https://in.linkedin.com/company/lostfoil',
    },
    {
      title: 'UI Developer',
      company: 'Thumbstack Technologies',
      imageUrl: '/images/thumbstack.png',
      description: 'Worked on multiple projects under the Scaler Topics Umbrella.',
      siteUrl: 'https://thumbstack.in/',
    },
    {
      title: 'Web Developer',
      company: 'Tantra Universe',
      imageUrl: '/images/tantra.png',
      description: 'Worked on multiple projects under the Scaler Topics Umbrella.',
      siteUrl: 'https://www.tantratshirts.com/',
    },
  ]

  return (
    <div className={styles.experience_container}>
      <div className={styles.experience_texts}>
        <div className={styles.name}>
          Past employers
        </div>
        <div className={styles.card_container}>
          {
            experienceCards.map((item: any) => {
              return (
                <div key={item.company} className={styles.card}>
                  <div className={styles.card_header}>
                    <Image
                      src={item.imageUrl}
                      alt="image url"
                      className={styles.company_image}
                      width={150}
                      height={24}
                      priority
                    />
                    {item.title}
                    <div className={styles.description}>
                      {item.description}
                    </div>
                  </div>
                  <a href={item.siteUrl} target='_blank' className={styles.link}>
                    Check them out!
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
      <Image
        src="/images/experience.png"
        alt="Hello all"
        className={styles.experience_photo}
        width={300}
        height={300}
        priority
      />
    </div>
  )
}

export default Experience