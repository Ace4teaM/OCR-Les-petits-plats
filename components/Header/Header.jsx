"use client";
import styles from './Header.module.css';
import { useShared } from "@/components/SharedContext/SharedContext";

export default function Header() {
  const {searchText, setSearchText} = useShared();

  return (
    <header className={styles.container}>
      <img className={styles.banner} src="/images/banner.png" alt="banner"></img>
      <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
      <div className={styles.content}>
        <p>{"Découvrez nos recettes".toUpperCase()}<br></br>{"du quotidien, simples et délicieuses".toUpperCase()}</p>
        <div className={styles.search}>
            <input
            type="search"
            placeholder="Rechercher une recette, un ingrédient, ..."
            aria-label="Rechercher"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
            <img src="/images/search.png" alt="logo"></img>
        </div>
        </div>
    </header>
  );
}