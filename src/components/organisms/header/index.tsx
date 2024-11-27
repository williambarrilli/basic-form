import React from 'react'
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter()

  return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>MyBrand</h1>
        </div>
        <nav className={styles.nav}>
          <a onClick={() => router.push('/login')}>Login</a>
          <a onClick={() => router.push('/register')}>Registrar</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
      )
}
