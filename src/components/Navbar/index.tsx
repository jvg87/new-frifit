"use client"
import Link from "next/link";
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);

  function toggleMenu(){
    setShowNav(!showNav);
    setCloseIcon(!closeIcon);
  }

  function isActive(url:string){
    return url === pathname ? styles.active_links : ''
  }

  return (  
    <nav className={styles.nav_container}>
      <Link href='/' className={styles.logo}>
        Fri<span>Fit</span>
      </Link>
      <ul className={`${styles.nav_links} ${showNav ? styles.show_nav : ''}`}>
        <li>
          <Link href='/' className={isActive('/')} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' className={isActive('/about')} onClick={toggleMenu}>
            Sobre
          </Link>
        </li>
        <li>
          <Link href='/gallery' className={isActive('/gallery')} onClick={toggleMenu}>
            Galeria
          </Link>
        </li>
        <li>
          <Link href='/plans' className={isActive('/plans')} onClick={toggleMenu}>
            Planos
          </Link>
        </li>
        <li>
          <Link href='/trainers' className={isActive('/trainers')} onClick={toggleMenu}>
            Professores
          </Link>
        </li>
        <li>
          <Link href='/contact' className={isActive('/contact')} onClick={toggleMenu}>
            Contato
          </Link>
        </li>
      </ul>
      <div 
        className={`${styles.btn_toggle} ${closeIcon ? styles.exit_toggle : ''}`}
        onClick={toggleMenu}
      >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
      </div>
    </nav>
  );
}

export default Navbar;