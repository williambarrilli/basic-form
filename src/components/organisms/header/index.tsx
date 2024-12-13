/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a onClick={() => router.push("/")}>
          <h1>Home</h1>
        </a>
      </div>
      <nav className={styles.nav}>
        <a onClick={() => router.push("/register")}>Registrar</a>
        <a onClick={() => router.push("/login")}>Login</a>
        <a href="/#contact">Contato</a>
        <a onClick={() => router.push("/home-event/675b81f62d561d8b5bfa18a4")}>
          Evento teste
        </a>
      </nav>
    </header>
  );
}
