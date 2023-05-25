"use client"
import Link from "next/link";
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  function isActive(url:string){
    return url === pathname ? styles.active_links : ''
  }

  return (  
    <nav className={styles.nav_container}>
      <Link href='/' className={styles.logo}>
        Fri<span>Fit</span>
      </Link>
      <ul className={styles.nav_links}>
        <li>
          <Link href='/' className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' className={isActive('/about')}>
            Sobre
          </Link>
        </li>
        <li>
          <Link href='/gallery' className={isActive('/gallery')}>
            Galeria
          </Link>
        </li>
        <li>
          <Link href='/plans' className={isActive('/plans')}>
            Planos
          </Link>
        </li>
        <li>
          <Link href='/trainers' className={isActive('/trainers')}>
            Professores
          </Link>
        </li>
        <li>
          <Link href='/contact' className={isActive('/contact')}>
            Contato
          </Link>
        </li>
      </ul>
      <div className={styles.btn_toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;