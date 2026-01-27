import styles from './HeaderMessage.module.css';

export default function HeaderMessage({message, title}) {
  return (
    <header className={styles.container}>
      <img className={styles.banner} src="/images/banner.png" alt="banner"></img>
      <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{message}</p>
        </div>
    </header>
  );
}