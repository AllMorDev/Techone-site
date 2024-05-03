'use client'
import styles from './seta.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrow from './assets/seta.svg';

export default function Seta() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const triggerPosition = 500; 
      if (window.scrollY > triggerPosition) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToDiv = () => {
    const targetDiv: any = document.getElementById('targetDiv');
    const targetDivPosition = targetDiv.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: targetDivPosition,
        behavior: 'smooth'
    });
  };

  return (
    <div>
      {showDiv && (
        <div className={styles.container}>
            <button onClick={scrollToDiv}>
                <Image className={styles.arrow}  alt='Seta' src={Arrow}/>
            </button>
        </div>
      )}
    </div>
  );
}
