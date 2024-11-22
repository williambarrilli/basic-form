'use client'
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss'

type MenuItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
};


const items:MenuItem[] =  [{
    title:'Home',
    path: '/protected/home'
},{
    title:'Criar Evento',
    path: '/protected/register-event'
}]

 function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                <span className={styles.title}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
