import React from 'react'

import styles from '@/styles/skills.module.css'
import Image from 'next/image'

const MySkills = () => {
  return (
    <div className={styles.skills_container}>
      <Image
        src="/images/skills.png"
        alt="Hello all"
        className={styles.skills_photo}
        width={300}
        height={300}
        priority
      />
      <div className={styles.skills_texts}>
        <div className={styles.name}>
          MY SKILLS
        </div>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <Image
              src="/images/uiux.png"
              alt="dev"
              className={styles.card_img}
              width={32}
              height={32}
              priority
            />
            <div className={styles.title}>
              Software Development
            </div>
            <div className={styles.subtitle}>
              I am a Frontend Developer with 3+ years of experience in ReactJS alongside NextJS and Typescript. <br />
              I have worked extensively with NodeJS and SQL Databases. <br />
              I also have hosting experiences with AWS, Vercel and Digital Ocean.

            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/dev.png"
              alt="uiux"
              className={styles.card_img}
              width={40}
              height={40}
              priority
            />
            <div className={styles.title}>
              UI UX Design
            </div>
            <div className={styles.subtitle}>
              I have worked extensively with UI design and UX research in the past along the course of multiple internships. <br />
              I have dabbled with UX writing, Empathy mapping, Case studies and various other aspects of UX Design.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills