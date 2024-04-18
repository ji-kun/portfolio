import Head from "next/head";
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Introduction from "@/components/Introduction";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import MySkills from "@/components/MySkills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected, setSelected] = useState('About')
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selected])

  return (
    <>
      <Head>
        <title>Rohit Kunji</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.home_page_container}>
          <Header selected={selected} setSelected={setSelected} />
          <div ref={selected === 'About' ? sectionRef : null} className={styles.home_page_section}>
            <Introduction />
          </div>
          <div ref={selected === 'Skills' ? sectionRef : null} className={styles.home_page_section}>
            <MySkills />
          </div>
          <div ref={selected === 'Experience' ? sectionRef : null} className={styles.home_page_section}>
            <Experience />
          </div>
          <div ref={selected === 'Contact' ? sectionRef : null} className={styles.home_page_section}>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
