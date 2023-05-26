import Link from 'next/link';
import styles from './styles.module.css';


function Header() {
  return (  
    <header className={styles.main_header}>
      <div className={styles.header_container}>
        <h1><span>Fitness</span> is not a destination it is <span>away of life.</span></h1>
        <p>In here we will help yopu to shape and build your ideal body and live up your life to the fullest</p>
        <Link href='/plans' className={styles.header_btn}>
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Header;