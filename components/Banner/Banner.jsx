import Link from 'next/link';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <Link href="/">
    <header className={styles.container}>
      <img className={styles.banner} src="/images/banner.png" alt="banner"></img>
      <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
    </header>
    </Link>
  );
}